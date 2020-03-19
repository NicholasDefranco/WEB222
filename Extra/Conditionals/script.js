let grade;

grade = parseFloat(prompt(`Enter your grade for a class`));

console.log(`Your grade is ${grade}`);

if(grade < 50 && grade >= 0){
    alert(`F`);
}else if(grade < 60 && grade >= 50){
    alert(`D`);
}else if(grade < 70 && grade >= 60){
    alert(`C`);
}else if(grade < 80 && grade >= 70){
    alert(`B`);
}else if(grade <= 100 && grade >= 80){
    alert(`A`);
}else {
    alert(`invalid grade`);
}

console.log(`done`);


const number = grade;

alert(number);

if(number > 40){
  alert(`wow`);
}
