/*

    Web Storage- A mordern Technology used to allow your website and/or web application to maintain data about a user, i.e, maintain state.


  Advantages of using Web Storage vs Cookies

  1. Bigger in Size 
  2. You can store complex data structures (objects, arrays)



    Types of WebStorage

    1. localStorage- Stores data without an expiry date.
    2. sessionStorage

*/

//Create a localStorage/sessionStorage objects

let x="Seneca";

let arr =["Humber","Sherdian","Seneca"];
localStorage.setItem("school",JSON.stringify(arr));
//sessionStorage.setItem("key",value)

//Fetch
let localStorageValue=JSON.parse(localStorage.getItem("school"));
console.log(localStorageValue.length);
//sessionStorage.getItem("key")

//Destroy
//localStorage.removeItem("school");
//sessionStorage.removeItem("key");