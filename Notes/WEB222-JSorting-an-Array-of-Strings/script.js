
function printarr(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}


//Arrays in JS are objects!!!
let movies=["Transformers 3","Fast and Furious 8","Hell Boy","Avatar","Avengers : End Game","Avengers Infinity Wars"];

console.log("The movies that are currently stored in our Database is as follows : ");
printarr(movies);



console.log("\n\nThe movies that are currently stored in our Database is as follows (ASC) : ");
movies.sort();

printarr(movies);

movies.reverse();
console.log("\n\nThe movies that are currently stored in our Database is as follows (DESC) : ");

printarr(movies);
