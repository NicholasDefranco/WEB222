//Arrays in JS are objects!!!
let movies=["Transformers 3","Fast and Furious 8","Hell Boy","Avatar","Avengers : End Game","Avengers Infinity Wars"];


movies.push("Lion King");
movies.push("Yes Man");

movies.splice(2,2, "something");
//movies.splice(1, 1);

/* The pop() removes the last element in the array
movies.pop();
movies.pop();
movies.pop();
movies.pop();
*/


/* The shift method removes the first element in array
movies.shift();
movies.unshift("Avengers:Age of Ultron");
*/
/*
  Output before splicing using movies.splice(2,2);
Transformers 3
Fast and Furious 8
Hell Boy
Avatar
Avengers : End Game
Avengers Infinity Wars
Lion King
Yes Man
  
 Output after splicing : using movies.splice(2,2);

  Transformers 3
Fast and Furious 8
Avengers : End Game
Avengers Infinity Wars
Lion King
Yes Man
  
   */

/*

  The following will add the value "THe Matrix" to the element located at index number 2. No elements would be deleted because the 0 as the second argument will imply that you don't want to delete any elements at the given index
  movies.splice(2,0,"The Matrix");

*/

for(let i=0; i<movies.length;i++)
{
    console.log(`${movies[i]}`);
}
