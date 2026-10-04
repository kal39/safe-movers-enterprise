from fastapi import APIRouter
from pydantic import BaseModel
from app.services.pricing_engine import calculate_dynamic_quote

router = APIRouter(prefix="/api/quote", tags=["Quote Engine"])

class QuoteRequest(BaseModel):
    full_name: str
    phone: str
    moving_from: str
    moving_to: str
    property_type: str
    bedrooms: int
    moving_date: str

@router.post("/")
def request_quote(data: QuoteRequest):
    simulated_distance = 38.4 # Real system replaces this with Google Distance Matrix API
    pricing = calculate_dynamic_quote(data.property_type, data.bedrooms, simulated_distance)
    return {
        "status": "success",
        "client": data.full_name,
        "route": f"{data.moving_from} to {data.moving_to}",
        "pricing": pricing
    }