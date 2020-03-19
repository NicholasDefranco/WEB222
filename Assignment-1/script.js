// Nicholas Defranco
// Student #: 106732183

//Note:
// My usual quick and dirty C algorithm to round to the
// nearest hundreth did not work in javascript
// Due to this, prices will go past the second decimal point

// error code constants 
const INVALID_CHAR_ARG = 5;
const INVALID_INT_ARG = 4;
const INVALID_FLOAT_ARG = 3;
const INVALID_QUALIFICATION = 2;
const INVALID_EMP = 1;
const EXIT_SUCCESS = 0;

// constant storing regular worker character
const REG_WORKER = "R";

// constant storing faculty worker character 
const FAC_WORKER = "F";
// constant storing character 
const BACHELOR = "B";
// constant storing Master degree character 
const MASTER = "M";

// holds the error number of recencly exited funtion.
let errno = EXIT_SUCCESS;

// Prints specific error message based on current value
// of global errno variable

// My error catching is not perfect, but I wanted to try.
function perror() {

  if(errno == INVALID_CHAR_ARG){
    alert("Char argument is required");
  } else if(errno == INVALID_INT_ARG){
    alert("Int argument is required");
  } else if(errno == INVALID_FLOAT_ARG) {
    alert("Float argument is required");  
  } else if(errno == INVALID_QUALIFICATION){ 
    alert("There can only be a (B)achelor  and a " + 
                      "(M)aster qualifications");
  } else if(errno == INVALID_EMP) {
    alert("There can only be a (R)egular and (F)aculty " +
              "employee");
  } 

}

// prompts user for qualification code
// computes gross salary based on input
// returns gross salary
function get_fac_gross(){

  // constants
  const BACHELOR_PAY = 100.00;
  const BACHELOR_ALLOWANCE = 600.00;
  const MASTER_PAY = 175.00;
  const MASTER_ALLOWANCE = 1500.00;

  // default values
  let gross = 0.0;
  let code = "X";

  // prompt user for faculty code until they cooperate
  do {

  code = 
  prompt("Enter Faculty qaulification code").toUpperCase();

   if(!(code === MASTER || code === BACHELOR)){
    errno = INVALID_QUALIFICATION;
    perror();
  } else {
    errno = EXIT_SUCCESS;
  }

  }while(errno !== EXIT_SUCCESS);

  console.log(`Qaulification: ${code == 'M' ? "Master" : 
                  "bachelor"}`);

  // prompt user for hours worked in a month until they 
  // cooperate
  do {

    hours = parseInt(prompt("Enter amount of hours worked"
          + " in a month(decimals will be truncated)"));

    if(isNaN(hours)){
      errno = INVALID_INT_ARG;
      perror();
    }else {
      errno = EXIT_SUCCESS;
    } 

  } while(errno != EXIT_SUCCESS);

  // calculate gross based on faculty type
  switch(code){
      case BACHELOR:
          gross =  (BACHELOR_PAY * hours +           
                                      BACHELOR_ALLOWANCE);
          errno = EXIT_SUCCESS;
          break;
      case MASTER:
          gross =  (MASTER_PAY * hours + MASTER_ALLOWANCE);
          errno = EXIT_SUCCESS;
          break;
      default:
          errno = INVALID_QUALIFICATION;
          perror();
    }

  return gross;

}

// prompts user for fixed monthly salary 
// and hours worked in a given month
//
// computes gross salary based on input
// returns gross salary
function get_reg_gross(){

  const AVG_MONTH_HOURS = 160;
  let gross = 0.0;
  let fixed_salary = 0.0;

  // prompt user for fixed month salary until they cooperate
  do {

    fixed_salary = parseFloat(prompt("Enter a fixed " + 
                      "monthly salary"));

    if(isNaN(fixed_salary)){
      errno = INVALID_FLOAT_ARG;
      perror();
    } else {
      errno = EXIT_SUCCESS;
    }

  }while(errno !== EXIT_SUCCESS);
  console.log(`fixed monthly salary: $${fixed_salary}`);

  // prompt user for amount of hours worked
  // in a moth until they cooperate
  do {

    hours = parseInt(prompt("Enter amount of hours worked " +    
    "in a month(decimals will be truncated)"));

    if(isNaN(hours)){
      errno = INVALID_INT_ARG;
      perror();
    } else {
      errno = EXIT_SUCCESS;
    }

  } while(errno !== EXIT_SUCCESS);

  
  if(hours === AVG_MONTH_HOURS){
    gross = fixed_salary;
  } else if(hours < AVG_MONTH_HOURS){
    gross = hours * (fixed_salary / AVG_MONTH_HOURS);
  } else {
    gross = fixed_salary + ((hours - AVG_MONTH_HOURS) * 
              (2 * (fixed_salary / AVG_MONTH_HOURS)));
  }

  return gross;

}

// requires a gross salary
// returns income tax
function get_income_tax(gross){

  const CIT = 0.25;
  const TAX_THREASHOLD = 2500.00;
  let tax = 0.0;

  if(isNaN(gross)) {
    errno = INVALID_FLOAT_ARG;
  } else {
    errno = EXIT_SUCCESS;
    if(gross >= TAX_THREASHOLD) {
      tax = (gross - TAX_THREASHOLD) * CIT;
    } else {
      tax = 0.0;
    }
  }

  return tax;

}

// requires the monthly_earnings 
// returns health surcharge
function get_health_surcharge(monthly_earn) {

  const SURCHARGE_THREASHOLD = 3000.00;
  let surcharge = 0.0;

  // if the employee earns more than $3000 in a month
  // they will have a fee of $33 else they will have a fee
  // of $19.20.
  if(monthly_earn > SURCHARGE_THREASHOLD){
      surcharge = 33.00;
  } else {
      surcharge = 19.20;
  }

  return surcharge;

}

// helper funtion to call deduction functions
// returns total deductions
function deductions(gross) {
  let income_tax = 0.0;
  let health = 0.0;
  let totDeductions = 0.0;
  console.log(`Deductions`);
  console.log(`Income tax: $${income_tax = get_income_tax
                  (gross)}`);
  console.log(`health surcharge: $${health = 
            get_health_surcharge(gross - income_tax)}\n`);

  return health + income_tax;

}

// returns net pay
// calls the other functions which serve as helper functions
function get_net_pay() {

  let gross = 0.0;
  let income_tax = 0.0;
  let health = 0.0;
  let type = 'X';
  let net_pay = 0.0;

  // prompt user until they cooperate
  do {

    type = prompt(`Enter employee type`).toUpperCase();

    if(type === REG_WORKER){
      console.log(`--Regular worker--\n`);
      gross = get_reg_gross();
    } else if(type === FAC_WORKER){
      console.log(`--Faculty worker--\n`);
      gross = get_fac_gross();
    } else {
      errno = INVALID_EMP;
      perror();
    }

  }while(errno !== EXIT_SUCCESS);

  // print results to user
  console.log(`Hours worked in a month: ${hours}\n`);
  console.log(`Before deductions`);
  console.log(`Gross earnings in a month: $${gross}\n`);

  return gross - deductions(gross);

}

// client code
let net_pay = 0.0;

net_pay = get_net_pay();

console.log(`net pay: $${net_pay}`);

