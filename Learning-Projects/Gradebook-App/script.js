function getAverage(scores) {
    let sum_of_scores = 0;

    for (let i = 0; i < scores.length; i++) {
        sum_of_scores += scores[i];
    }

    return sum_of_scores / scores.length;
}


function getGrade(score) {
    if (score >= 100) {
        return "A++";
    }
    else if (score >= 90 && score < 100) {
        return "A";
    }
    else if (score >= 80 && score <90) {
        return "B";
    }
    else if (score >=70 && score < 80) {
        return "C";
    }
    else if (score >= 60 && score <70) {
        return "D";
    }
    else {
        return "F";
    }
}


function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}


function studentMsg(totalScores, studentScore) {
    if (hasPassingGrade(studentScore) === true) {
        return "Class average: " + getAverage(totalScores) +
            ". Your grade: " + getGrade(studentScore) + ". You passed the course."
    }
    else {
        return "Class average: " + getAverage(totalScores) +
            ". Your grade: " + getGrade(studentScore) + ". You failed the course."
    }
}


console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));