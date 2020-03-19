const butColor = document.querySelector("#butColor");
const butBColor = document.querySelector("#butBColor");
const butV = document.querySelector("#butV");
const div =document.querySelector("#container");

butColor.addEventListener("click",function(){
  /*  
    Syntax for manipulating CSS using JS :

    element.style.cssProperty=value;

  */

  div.style.color="yellow";
});

butBColor.addEventListener("click",function(){
  
  /*
    ALL CSS PROPERTIES THAT HAVE A - , you must combine the words and capitilize 
    the 1st letter in the second word

  */
  div.style.backgroundColor="black";
});

butV.addEventListener("click",function(){
 
 //. div.style.display="none";

 div.style.visibility="hidden";


});
