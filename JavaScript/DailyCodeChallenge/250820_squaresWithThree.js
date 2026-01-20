function squaresWithThree(n) {

  let total = 0

  for (let x = 1; x<=n; x++) {
    
    const numStr = (x**2).toString()
    if (numStr.indexOf("3") != -1) {
      total++
      
    }
  }


  return total;
}

squaresWithThree(10000)

/*
3 Strikes
Given an integer between 1 and 10,000, return a count of how many numbers from 1 up to that integer whose square contains at least one digit 3.

Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Waiting:1. squaresWithThree(1) should return 0.
Waiting:2. squaresWithThree(10) should return 1.
Waiting:3. squaresWithThree(100) should return 19.
Waiting:4. squaresWithThree(1000) should return 326.
Waiting:5. squaresWithThree(10000) should return 4531.
*/