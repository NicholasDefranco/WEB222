const stopBut=document.querySelector("#stopBut");
const slowBut=document.querySelector("#slowBut");
let intervalObj=setInterval(doSomething,10);
let count = 0;
let increment = 0.01;

stopBut.addEventListener("click",function(){

    clearInterval(intervalObj);
});

slowBut.addEventListener("click", slowdown);

function slowdown() {
  increment = 0.001;
}

function doSomething()
{
    count += increment;
    if(count <= 100) {
      document.getElementById("num").innerHTML = `${count}`;
    } else {
      clearInterval(intervalObj);
    }
}
