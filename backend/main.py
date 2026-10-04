from datetime import datetime, timezone
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import SQLModel, Field, create_engine, Session
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# 1. Database Connection (Using connect_args for timeout control)
DATABASE_URL = "postgresql://neondb_owner:npg_rjbDaTYU7J4F@ep-purple-poetry-b4powq6i-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require"

engine = create_engine(
    DATABASE_URL, 
    echo=True, 
    pool_pre_ping=True,
    connect_args={"connect_timeout": 10}  # 👈 Fixed: passed inside connect_args dictionary
)

# 2. Database Model matching your frontend form fields
class LeadModel(SQLModel, table=True):
    __tablename__ = "leadmodel"
    
    id: int | None = Field(default=None, primary_key=True)
    full_name: str
    phone: str
    moving_from: str
    moving_to: str
    move_type: str
    rooms: str
    estimated_cost: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "New"

def init_db():
    try:
        SQLModel.metadata.create_all(engine)
        logger.info("Database tables initialized successfully.")
    except Exception as e:
        logger.warning(f"Warning: Could not connect to database on startup: {e}")

app = FastAPI(title="Safe Movers API", version="1.0.0")

# 3. Comprehensive CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup():
    init_db()

def get_session():
    with Session(engine) as session:
        yield session

@app.get("/")
def read_root():
    return {"status": "online", "message": "FastAPI backend is running and ready."}

# ==========================================
# 4. SECURE LEAD CAPTURE ENDPOINT
# ==========================================
@app.post("/api/v1/quotes/lock")
def lock_quote(lead: LeadModel, session: Session = Depends(get_session)):
    logger.info(f"Received quote lock request for: {lead.full_name} ({lead.phone})")
    try:
        session.add(lead)
        session.commit()
        session.refresh(lead)
        logger.info(f"Successfully saved lead ID {lead.id} to database.")
        return {"status": "success", "data": lead}
    except Exception as e:
        session.rollback()
        logger.error(f"Database error while saving lead: {str(e)}")
        raise HTTPException(
            status_code=500, 
            detail=f"Database save failed: {str(e)}"
        )