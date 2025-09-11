

function isLeapYear(isLeap) {
    if (((isLeap % 4 == 0)&& (isLeap % 100 !==0))||(isLeap % 400 ==0)){
        return `${isLeap} is a leap year.`;
    } else {
        return `${isLeap} is not a leap year.`;
    };
};

let year
let result

year = 2024;
result = isLeapYear(year);
console.log(result);

year = 2000;
result = isLeapYear(year);
console.log(result);

year = 1900;
result = isLeapYear(year);
console.log(result);