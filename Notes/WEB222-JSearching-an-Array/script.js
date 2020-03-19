let movies=["Transformers 3","Fast and Furious 8","Hell Boy","Avatar","Avengers : End Game","Avengers Infinity Wars"];

let found = false;
let movie=prompt("Please enter a movie");

for(let i = 0; i < movies.length && !found; i++){
  if(movies[i] === movie){
    console.log(i);
    found = true;
  }
}

if(!found){
  console.log(`not found!`);
}
