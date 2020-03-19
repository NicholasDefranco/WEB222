// holds all information about a customer
class Customer {
  constructor(fn, ln, bal, id, pwd){
    this.firstname = fn;
    this.lastname = ln;
    this.balance = bal;
    this.customerid = id;
    this.password = pwd;
  }
}

// bank of customers
const database = [];

// insertion
database.push(new Customer("Albert", "Danison", 3689.21, 4552, 2811));

database.push(new Customer("Kadeem", "Best", 2500.00, 4553, 1234));

database.push(new Customer("Jenelle", "Chen", 10000.00, 4554, 6189));

database.push(new Customer("Nick", "Defranco", 2000, 4556, 9090));

database.push(new Customer("Mario", "Mario", 3000, 4557, 6789));
///////

// start of script
let i = 0;
let amount = 0.0;
let choice = 'X';
let user = 0;
let pwd = 0;
let found = false;

alert(`Fun Fact: "You are richer than you think". Welcome to Scotiabank Online Banking!`);

// validate user login
do {

  user = parseInt(prompt("Please enter your customer ID: "));
  pwd = parseInt(prompt("Password: "));
  
  // linear search ...
  for(i = 0; i < database.length; i++) {
    if(database[i].customerid === user && database[i].password === pwd) {
      found = true;
      break;
    }
  } 

  if(!found) {
    alert(`Unfortunately, you entered an incorrect  customer and/or password please try again: `);
  }

}while(!found);

alert(`Welcome, ${database[i].firstname} ${database[i].lastname} you have been logged into your account. Your current balance is $${database[i].balance}`);

// menu select
do {
  choice = prompt(`Your balance is $${database[i].balance}. How can we help you today? Enter W or w to Withdraw money from your account or D or d to deposit money to your account (q or Q to quit).`);

  if(choice == 'W' || choice == 'w') {

    // no error catching in here if user inputs
    // invalid information to be stored in amount
    let valid = false;
    do {
      amount = parseFloat(prompt(`${database[i].firstname} ${database[i].lastname}, how much do you want to Withdraw into your account today? (Your current balance is $${database[i].balance}): `));

      if(amount > database[i].balance) {
        alert(`Unfortunately, you cannot widthdraw $${amount}. Your current balance is $${database[i].balance}, thus you can only withdraw an amount that is less than that figure. Please re-enter the amount you want to withdraw from your amount`);
      } else {
       database[i].balance -= amount;
       valid = true;
      }

    } while(!valid);

    alert(`You have withdrawed $${amount}, your balance is $${database[i].balance}`);

  } else if (choice == 'D' || choice == 'd') {

    // no error catching in here if user inputs
    // invalid information to be stored in amount

    amount = parseFloat(prompt(`${database[i].firstname} ${database[i].lastname}, how much do you want to deposit into your account today? (Your current balance is $${database[i].balance}): `));
    database[i].balance += amount;
    alert(`You have successfully deposited $${amount} into your account. Your new balance is $${database[i].balance}`);
  } else if(choice != 'q'&& choice != 'Q'){
    alert(`Invalid choice!`);
  } else {
    alert(`bye!`);
  }

} while(choice != 'q' && choice != 'Q');
