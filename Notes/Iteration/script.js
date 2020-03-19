/*
for(let i = 0; i < 10; i++){
  console.log("I love programming");
}
*/

/*
input validation

let table;

do {
  
    table = parseInt(prompt(`enter a table number`));

    if(table < 1 || table > 12){

      alert("please enter a value before 1 and 12");

    }

} while(table < 1 || table > 12);

for(let i = 1; i <= 12; i++){
  console.log(`${i} x ${table} = ${i * table}`);
}

*/

/*

for(let i = 1; i <= 12; i++){
  console.log(`${i} ${i * i} ${i * i * i}`);
}



let startYear;
let endYear;

startYear = parseInt(prompt(`Enter a start year`));
endYear = parseInt(prompt(`Enter a end year`));

for(let i = startYear; i <= endYear; i++){
  if(i % 4 === 0){
    console.log(`${i} is a leap year`);
  }
}

console.log(`Miles    Kilometres`);
for(let i = 1; i <= 25; i++){
  console.log(`${i}         ${i * 1.61}`);
}

*/

let num = 0;
let oddSum = 0;
let oddCount = 0;
let evenCount = 0;

do {
  num = prompt(`Enter a number`);
  if(!isNaN(num)) {
    if(parseInt(num) % 2 == 0){
      evenCount++;
    }else {
      oddSum += parseInt(num);
      oddCount++;
    }
  }
}while(num !== 'S');


console.log(`there are ${evenCount} even numbers & average of odd 
                numbers is ${oddCount > 0 ? oddSum / oddCount : 'undefined'}`);



/*
let num;

num = parseInt(prompt(`enter a number`));

let small = num;
let large = num;

for(let i = 0; i < 4; i++){

  num = parseInt(prompt(`enter a number`));

  if(num < small){
    small = num;
  }else if(num > large){
    large = num;
  }

}

console.log(`smallest num is: ${small} & largest num is: ${large}`);
*/


/*
working version

let num1 = 1;
let denom1 = 2;

let num2 = 2;
let denom2 = 9;

let ansdenom = denom1 * denom2;
let ansnum = (num1 * denom2) + (num2 * denom1);

if(ansdenom !== 0 && ansdenom !== ansnum){
  
  let done = false;

  for(let i = (ansdenom > ansnum ? ansdenom : ansnum)/2; i  >= 0 && !done; i--){
      if(ansdenom % i == 0 && ansnum % i == 0){
          ansdenom/=i;
          ansnum/=i;
          done = true;
      }
  } 

  console.log(ansnum);
  console.log('--');
  console.log(ansdenom);


} else if(ansdenom !== 0){

  console.log(1);
  console.log('--');
  console.log(1);

} else {
  console.log(`divisor is zero!!!`);
}
*/

/*

let sum = 0;
let num = 0;

do {

  num = prompt(`Enter a number`);
  if(!isNaN(num) && num !== NaN){
    sum += parseFloat(num);
  }

}while(num !== 'S');

console.log(sum);

*/

