//HAD TO USE GEMINI ASSISTANCE HERE AS WAS CAUGHT UP IN THE LOGIC OF USING A DATE TYPE


function calculateParkingFee(parkTime, pickupTime) {

  const [parkH, parkM] = parkTime.split(':').map(Number);
  const [pickH, pickM] = pickupTime.split(':').map(Number);
  
  let startMinutes = parkH * 60 + parkM;
  let endMinutes = pickH * 60 + pickM;

  let isOvernight = false;

  // 2. Handle the Midnight Cross
  if (endMinutes < startMinutes) {
    endMinutes += 24 * 60; // Add 24 hours in minutes
    isOvernight = true;
  }

  // 3. Calculate total hours (rounding up)
  const durationMinutes = endMinutes - startMinutes;
  const parkHours = Math.ceil(durationMinutes / 60);

  // 4. Calculate Costs
  // Rule: $3 per hour, but minimum of $5
  let baseCost = parkHours * 3;
  if (baseCost < 5) baseCost = 5;

  // Rule: Add $10 if it spanned overnight
  const totalCost = isOvernight ? baseCost + 10 : baseCost;

  return `$${totalCost}`;
}

// Test Case 5: 18:15 to 01:30
// Duration: 7 hours 15 mins -> 8 hours. 
// (8 * 3) + 10 = $34.
console.log(calculateParkingFee("18:15", "01:30")); // "$34"

// Test Case 6: 11:11 to 11:10 (Next day)
// Duration: 23 hours 59 mins -> 24 hours.
// (24 * 3) + 10 = $82.
console.log(calculateParkingFee("11:11", "11:10")); // "$82"