** start of script.js **

let lunches = [];

function addLunchToEnd(lunchList, lunchItem) {
    lunchList.push(lunchItem);
    console.log(`${lunchItem} added to the end of the lunch menu.`)
    return lunchList;
    
}

function addLunchToStart(lunchList, lunchItem) {
    lunchList.unshift(lunchItem);
    console.log(`${lunchItem} added to the start of the lunch menu.`);
    return lunchList;
}

function removeLastLunch(lunchList) {
    if (lunchList.length<=0) {
        console.log(`No lunches to remove.`);
        return lunchList;
    }
    let removeItem = lunchList.pop();
    console.log(`${removeItem} removed from the end of the lunch menu.`);
    return lunchList;
}

function removeFirstLunch(lunchList) {
    if (lunchList.length<=0) {
        console.log(`No lunches to remove.`);
        return lunchList;
    }
    let removeItem = lunchList.shift();
    console.log(`${removeItem} removed from the start of the lunch menu.`);
    return lunchList;
}

function showLunchMenu(lunchList) {
    if (lunchList.length=== 0) {
        console.log(`The menu is empty.`);
        return
    }
    console.log(`Menu items: `+lunchList.join(", "));
}


function getRandomLunch(lunchList) {
    if (lunchList.length<=0) {
        console.log(`No lunches available.`);
        return lunchList;
    }
    let randLunch = Math.floor(Math.random()*lunchList.length)
    console.log(`Randomly selected lunch: ${lunchList[randLunch]}`);
    return lunchList[randLunch];
}

** end of script.js **

