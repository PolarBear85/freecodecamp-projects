const obj1 = {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O"
};

const obj2 = {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
    answer: "George Washington"
};

const obj3 = {
    category: "Geography",
    question: "Which continent is the Amazon Rainforest primarily located in?",
    choices: ["Africa", "Asia", "South America"],
    answer: "South America"
};

const obj4 = {
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["Charles Dickens", "William Shakespeare", "Jane Austen"],
    answer: "William Shakespeare"
};

const obj5 = {
    category: "Mathematics",
    question: "What is the value of Pi (π) rounded to two decimal places?",
    choices: ["3.12", "3.14", "3.16"],
    answer: "3.14"
};

const questions = [obj1, obj2, obj3, obj4, obj5];


function getRandomQuestion(questionList) {
    let randomQuestion = Math.floor(Math.random()*questionList.length);
    return questionList[randomQuestion];
}

function getRandomComputerChoice(selectedQuestion) {
    let randomAnswer = Math.floor(Math.random() * selectedQuestion.length);
    return selectedQuestion[randomAnswer];
}


function getResults(selectedQuestion, selectedAnswer) {
    if (selectedQuestion.answer == selectedAnswer) {
        return `The computer's choice is correct!`
    } else {
        return `The computer's choice is wrong. The correct answer is: ${selectedQuestion.answer}`
    }
}

randomQuestion = getRandomQuestion(questions);
//console.log(randomQuestion.choices);
randomChoice = getRandomComputerChoice(randomQuestion.choices);
//console.log(randomChoice);
results = getResults(randomQuestion, randomChoice);
console.log(results);
