function launchFuel(payload) {
  let fuelMass = payload / 5
  let totalMass = 0
  let moreFuel = true

  while (moreFuel) {
    totalMass = payload + fuelMass
    let newFuel = (totalMass / 5) - fuelMass
    fuelMass += newFuel
    if (newFuel < 1) {
      moreFuel = false

    }
  }


  console.log(`${fuelMass}`)

  return Number(fuelMass.toFixed(1))
}

launchFuel(50)