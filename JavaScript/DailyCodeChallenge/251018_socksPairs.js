function sockPairs(pairs, cycles) {

  let totalSocks = pairs * 2
  let lostSocks = 0

for (let x = 1; x <= cycles; x++) {
  console.log(`Cycle ${x}`)
  if (x % 2 == 0) {
    console.log(`2nd cycle, loose a sock`)
    totalSocks -= 1
    lostSocks += 1
  }

  if (x % 3== 0 && lostSocks > 0) {
    console.log(`3rd cycle, find a sock`)
    lostSocks -= 1
    totalSocks +=1
  }

  if (x %5== 0) {
    console.log(`5th cycle, sock worn out`)
    totalSocks -= 1
  }

  if (x % 10==0) {
    console.log(`10th cycle, buy new socks`)
    totalSocks += 2
  }
  if (totalSocks <0) return 0
  console.log(`Total socks: ${totalSocks}`)
}




  return Math.floor(totalSocks / 2);
}

sockPairs(1,8)

/*
Missing Socks
Given an integer representing the number of pairs of socks you started with, and another integer representing how many wash cycles you have gone through, return the number of complete pairs of socks you currently have using the following constraints:

Every 2 wash cycles, you lose a single sock.
Every 3 wash cycles, you find a single missing sock.
Every 5 wash cycles, a single sock is worn out and must be thrown away.
Every 10 wash cycles, you buy a pair of socks.
You can never have less than zero total socks.
Rules can overlap. For example, on wash cycle 10, you will lose a single sock, throw away a single sock, and buy a new pair of socks.
Return the number of complete pairs of socks.
Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Passed:1. sockPairs(2, 5) should return 1.
Passed:2. sockPairs(1, 2) should return 0.
Passed:3. sockPairs(5, 11) should return 4.
Passed:4. sockPairs(6, 25) should return 3.
Passed:5. sockPairs(1, 8) should return 0.
*/