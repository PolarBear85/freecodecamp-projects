function infected(days) {

  let computers = 1

  for (let x = 0; x <= days; x++) {
    computers = computers * 2

    if(x % 3 === 0) {
      computers -= Math.ceil(computers * 0.2)
    }
  }

  return computers;
}



 console.log(infected(1))


 /*
 function infected(days) {

  let computers = 1

  for (let x = 0; x <= days; x++) {
    computers = computers * 2

    if(x % 3 === 0) {
      computers -= Math.ceil(computers * 0.2)
    }
  }

  return computers;
}



 console.log(infected(1))
 */