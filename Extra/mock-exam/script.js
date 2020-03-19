class Item {

  constructor(n, p) {
    this.name = n;
    this.price = p;
  }

}

class Customer {

  constructor(n, d, u){
    this.name = n;
    this.discount = d;
    this.unique = u;
    this.items = [];
    this.amount = [];
    
  }

  productInfo() {
    for(let i = 0; i < this.unique; i++){
      let n = prompt('Enter product name');
      let p = parseFloat(prompt('Enter price'));
      this.items.push(new Item(n, p));
      this.amount.push(parseInt(prompt('Enter amount purchased')));
    }
  }

  calc() {
    let total = 0;
    for(let i = 0; i < this.unique; i++){
      total += this.items[i].price * this.amount[i];
    }

    return total * (1 - this.d);
  }  

}

let c = new Customer("Bob", 0.2, 1);

c.productInfo();

console.log(c.calc());
