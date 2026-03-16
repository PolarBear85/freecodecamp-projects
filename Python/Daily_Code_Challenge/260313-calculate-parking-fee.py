import math

def calculate_parking_fee(park_time, pickup_time):
    # 1. Split and convert to integers
    park_h, park_m = map(int, park_time.split(':'))
    pick_h, pick_m = map(int, pickup_time.split(':'))
    
    start_minutes = park_h * 60 + park_m
    end_minutes = pick_h * 60 + pick_m

    is_overnight = False

    # 2. Handle the Midnight Cross
    if end_minutes < start_minutes:
        end_minutes += 24 * 60  # Add 24 hours in minutes
        is_overnight = True

    # 3. Calculate total hours (rounding up)
    duration_minutes = end_minutes - start_minutes
    # math.ceil returns an integer in Python 3
    park_hours = math.ceil(duration_minutes / 60)

    # 4. Calculate Costs
    # Rule: $3 per hour, but minimum of $5
    base_cost = park_hours * 3
    if base_cost < 5:
        base_cost = 5

    # Rule: Add $10 if it spanned overnight
    total_cost = base_cost + 10 if is_overnight else base_cost

    return f"${total_cost}"

# --- Test Cases ---
# Test Case 5: 18:15 to 01:30 (8 hours @ $3 + $10 overnight)
print(calculate_parking_fee("18:15", "01:30"))  # Output: $34

# Test Case 6: 11:11 to 11:10 (24 hours @ $3 + $10 overnight)
print(calculate_parking_fee("11:11", "11:10"))  # Output: $82