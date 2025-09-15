const poll = new Map();

const addOption = option => {
    if (option === "") {
        return `Option cannot be empty.`
    }
    if (poll.has(option)) {
        return `Option "${option}" already exists.`;
    }
poll.set(option, new Set());
return `Option "${option}" added to the poll.`

}


const vote = (option, voterId) => {
if (!poll.has(option)) {
    return `Option "${option}" does not exist.`
}
const voteSet = poll.get(option)

if(voteSet.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`
}

voteSet.add(voterId)
return `Voter ${voterId} voted for "${option}".`


}

const displayResults = () => {
let resultsStr = `Poll Results:`
poll.forEach((val,key) => {
    resultsStr += `\n${key}: ${val.size} votes`
});
return resultsStr

}

addOption("UK")
addOption("Spain") 
addOption("Germany")
addOption("Malaysia")
addOption("Egypt")
addOption("Algeria")

vote("UK",1)
vote("Germany",2)
vote("Spain",3)
vote("Malaysia", "traveler1")
vote("Algeria", "traveler1")
vote("Algeria", "traveler1")

console.log(displayResults())