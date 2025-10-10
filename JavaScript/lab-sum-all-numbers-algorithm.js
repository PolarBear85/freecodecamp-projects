** start of script.js **

function sumAll (numArray) {
  let high = Math.max(...numArray);
  let low = Math.min(...numArray);
  let runTotal = 0;

  for (let i = low; i<=high; i++) {
    runTotal += i;
  }
  return runTotal
}




** end of script.js **

