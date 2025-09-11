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


showLunchMenu(lunches); // The menu is empty

lunches = addLunchToEnd(lunches, "Tacos"); // Tacos added to the end
console.log("Current list after adding Tacos:", lunches); // ['Tacos']
showLunchMenu(lunches); // Shows Tacos

lunches = addLunchToStart(lunches, "Salad"); // Salad added to the start
console.log("Current list after adding Salad:", lunches); // ['Salad', 'Tacos']
showLunchMenu(lunches); // Shows Salad, Tacos

lunches = addLunchToEnd(lunches, "Burger"); // Burger added to the end
console.log("Current list after adding Burger:", lunches); // ['Salad', 'Tacos', 'Burger']
showLunchMenu(lunches); // Shows Salad, Tacos, Burger

lunches = removeLastLunch(lunches); // Burger removed
console.log("Current list after removing last:", lunches); // ['Salad', 'Tacos']
showLunchMenu(lunches); // Shows Salad, Tacos

lunches = removeFirstLunch(lunches); // Salad removed
console.log("Current list after removing first:", lunches); // ['Tacos']
showLunchMenu(lunches); // Shows Tacos

lunches = removeLastLunch(lunches); // Tacos removed
console.log("Current list after removing last:", lunches); // []
showLunchMenu(lunches); // The menu is empty

removeFirstLunch(lunches); // No lunches to remove


