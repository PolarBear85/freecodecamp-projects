function tooMuchScreenTime(hours) {

    let counter = 0;
//Single Day and whole week

    for (const day of hours) {
        counter += day;

        //check for single day
        if (day >= 10) {
            return true;
        }

    };

    // check the week
    if ((counter / 7)>=6) {
        return true;
    }

    //Three Days

    counter = 0

    while (counter <= (hours.length-1)) {
        if (!hours[counter+2]) {
            break
        }
        let runningAvg = (hours[counter]+ hours[counter+1]+hours[counter+2])/3
        counter++;
        if (runningAvg >= 8) {
            return true;
        }
    }


    return false
}

//console.log(tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]))
//console.log(tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3]))
//console.log(tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6]))
console.log(tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4]))
console.log(tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0]))
//console.log(tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4]))
//console.log(tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6]))




/*
Screen Time

Given an input array of seven integers, representing a week's time, where each integer is the amount of hours spent on your phone that day, determine if it is too much screen time based on these constraints:

    If any single day has 10 hours or more, it's too much.
    If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
    If the average of the seven days is greater than or equal to 6 hours, it's too much.

*/
