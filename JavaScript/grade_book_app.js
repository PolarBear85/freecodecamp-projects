function getAverage(testScores) {
    let totalScores = 0;
    for (let score of testScores) {
        totalScores += score;
    }
    return totalScores / testScores.length;
}

function getGrade(studentScore) {
    if (studentScore >= 100) {
        return 'A+';
    } else if (studentScore >=90) {
        return 'A';
    } else if (studentScore >=80) {
        return 'B';
    } else if (studentScore >=70) {
        return 'C';
    } else if (studentScore >=60) {
        return 'D';
    } else {
        return 'F';
    }
}

function hasPassingGrade(studentScore) {
    let result = getGrade(studentScore);
    if (result != 'F') {
        return true;
    } else {
        return false;
    }
}

function studentMsg(testScores, studentScore) {
    let averageScore = getAverage(testScores);
    let studentGrade = getGrade(studentScore);
    let hasPassed = hasPassingGrade(studentScore);

    if (hasPassed) {
        return `Class average: ${averageScore}. Your grade: ${studentGrade}. You passed the course`;
    } else {
        return `Class average: ${averageScore}. Your grade: ${studentGrade}. You failed the course`;
    }
}