// Exercise: Day-14-Javascript. Get Grade
// Source: https://www.codewars.com/kata/55cbd4ba903825f7970000f5

function getGradeLong(s1, s2, s3) {
    let avgScore = (s1 + s2 + s3) / 3;
    if (avgScore <= 100 && avgScore >= 90) {
        return 'A'
    } else if (avgScore < 90 && avgScore >= 80) {
        return 'B'
    } else if (avgScore < 80 && avgScore >= 70) {
        return 'C'
    } else if (avgScore < 70 && avgScore >= 60) {
        return 'D'
    } else if (avgScore < 60 && avgScore >= 0) {
        return 'F'
    }
}

const getGradeMedium = (s1, s2, s3) => {
    let avg = (s1 + s2 + s3) / 3;
    let score = '';
    avg >= 90 && avg <= 100 ? score = 'A' : avg >= 80 && avg < 90 ? score = 'B' : avg >= 70 && avg < 80 ? score = 'C' : avg >= 60 && avg < 70 ? score = 'D' : score = 'F';
    return score
}

const getGradeShort = (s1, s2, s3) => 'FFFFFFDCBAA'.charAt((s1 + s2 + s3) / 3 / 10);

console.log(getGradeLong(95, 90, 93));
console.log(getGradeMedium(95, 90, 93));
console.log(getGradeShort(95, 90, 93));


console.log(1 != true)
console.log(NaN === NaN)