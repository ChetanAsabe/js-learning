function gradeCalculation(marks) {
    if(marks <= 0 || marks > 100 || isNaN(+marks)) {
        console.log(`Invalid Input : ${marks}`);
    } else if(marks >= 35 && marks < 50) {
        console.log(`Marks is : ${marks}, your grade is C, need improvement`);
    } else if(marks >= 50 && marks < 75){
        console.log(`Good Marks : ${marks}, your grade is B`);
    } else if(marks >= 75 && marks < 90) {
        console.log(`Excellent Marks : ${marks}, your grade is A`);
    } else{
        console.log(`Fantastic Marks : ${marks}, your grade is A+`);
    }
}

gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("eighty");
gradeCalculation(undefined);
gradeCalculation(null);