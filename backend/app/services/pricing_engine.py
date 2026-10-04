def calculate_dynamic_quote(property_type: str, bedrooms: int, distance_km: float) -> dict:
    # Base rates depending on property size
    base_rates = {
        "Studio": 15000,
        "1 Bedroom": 22000,
        "2 Bedroom": 35000,
        "3 Bedroom": 50000,
        "4+ Bedroom / Villa": 75000,
        "Office / Commercial": 90000
    }
    
    base_price = base_rates.get(property_type, 25000)
    bedroom_multiplier = bedrooms * 5000
    distance_charge = distance_km * 350 # Currency units per km
    
    total_estimated = base_price + bedroom_multiplier + distance_charge
    
    return {
        "base_price": base_price,
        "distance_km": distance_km,
        "estimated_total": round(total_estimated, 2),
        "currency": "KES"
    }
    