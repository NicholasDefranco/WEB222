/*
  ES 5 Scope (var)
  1. Global
  2. Function (Local Variable)

  ES6(let vs const)
  1. Global
  2. Function 
  3. Block

*/


//The below variable is a global variable (A variable that is declared in the global scope. This means that any function or statment can access and/or manipulate said variable)
let y=2500; 

//Example of Function Scope
function calHST()
{
   //this variable is a local variable. That is, a variable that is of function scope (a variable declared inside of a function)
   let x=200.50;


   //The variable i is of block scope, this simply means that only the block in which the variable was declared can access said variable
   for (let i=0; i<=24; i++)
   {

      if(i===100)
      {
        let result = 500*10;
      }

   }

}

//console.log(`${x}`);