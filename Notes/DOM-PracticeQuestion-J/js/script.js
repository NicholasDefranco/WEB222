let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let operation = document.getElementById("opt");

let but = document.getElementById("but");

but.addEventListener("click", function() {

  switch(operation.value) {
    case '+':
      alert(parseFloat(num1.value) + parseFloat(num2.value));
      break;

    case '-':
      alert(parseFloat(num1.value) - parseFloat(num2.value));
      break;

    case '*':
      alert(parseFloat(num1.value) * parseFloat(num2.value));
      break;

    case '/':
      alert(parseFloat(num1.value) / parseFloat(num2.value));
      break;

    default:
      alert("Invalid operation");
  }
  
});
