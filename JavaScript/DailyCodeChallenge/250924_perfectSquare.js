function isPerfectSquare(n) {

    if (n === 0) {
        return true
    }

    const numSqrt = Math.sqrt(n)
    const numRound = Math.floor(numSqrt)

    if (!numSqrt) {
        return false
    }

    if ((numSqrt - numRound) > 0) {
        return false
    } else {
        return true
    }

}

console.log(isPerfectSquare(0))