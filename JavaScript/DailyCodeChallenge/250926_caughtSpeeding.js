function speeding(speeds, limit) {

    let speeders = 0
    let totalSpeed = 0

    speeds.forEach(car => {
        
        if (car > limit) {
        speeders++;
        totalSpeed+= (car-limit)
        }
    })

    return totalSpeed/speeders ? [speeders,totalSpeed/speeders] : [speeders,0]

}

speeding([50, 60, 55], 60)
speeding([58, 50, 60, 55], 55)
speeding([100, 105, 95, 102], 100)

/*
Caught Speeding
Given an array of numbers representing the speed at which vehicles were observed traveling, and a number representing the speed limit, return an array with two items, the number of vehicles that were speeding, followed by the average amount beyond the speed limit of those vehicles.

If there were no vehicles speeding, return [0, 0].
*/