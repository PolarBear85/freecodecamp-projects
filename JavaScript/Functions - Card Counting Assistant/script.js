let count = 0

function cc (card) {
    const cardType = typeof card;
    if(cardType === "string" || card==10) {
        count--;

    }
    if (card <=6) {

        count++;

    }

    console.log(count)
    const returnNum = count.toString()
    if (count <= 0) {
        return `${returnNum} Hold`
    } else {
        return `${returnNum} Bet`
    } 
    
}

console.log(cc(10))
console.log(cc("J"))
console.log(cc("Q"))
console.log(cc("K"))
console.log(cc("A"))
