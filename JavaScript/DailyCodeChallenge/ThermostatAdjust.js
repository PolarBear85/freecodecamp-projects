function adjustThermostat(temp, target) {

    if(temp > target) {
        return "cool"
    } else if (temp < target) {
        return "heat"
    } else {
        return 'hold'
    }

}


console.log(adjustThermostat(68, 72))
console.log(adjustThermostat(75, 72))
console.log(adjustThermostat(72, 72))
console.log(adjustThermostat(-20.5, -10.1))