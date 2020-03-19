

class Product {
  constructor(id, t, d, p){
    this.code = id;
    this.title = t;
    this.description = d;
    this.price = p;
  }



}

function search(arr, num){
  for(let i = 0; i < arr.length; i++){
    if(arr[i].code == num){
      return arr[i];
    }
  }
  return -1;
}

let name = prompt("Enter name");

let num = prompt("# of products");

let products_left = num;

while(products_left > 0){
  let code = prompt("Code");
  if((let item = search(items)) != -1) {
    products_left -= prompt("");
  }
}