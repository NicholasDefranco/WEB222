// Name: Nicholas Defranco
// Student #: 106732183
// Assignment - Who wants to be a millionaire!

// Question class

// first option is the correct answer (will be randomized
// afterward).
class Question {
  constructor(str, a, b, c, d) {
    this.question = str;
    this.options = [a, b, c, d];
    this.correct = a;
  }
}

// constants
const MAX_ROUNDS = 3;
const QUESTIONS_PER_ROUND = 3;
const MAX_LIFELINES = 2;
const ROUND_EARN_END_OFFSET = 2;

// reward values in order
const rewards = [100.00, 500.00, 10000.00, 25000.00, 50000.00, 75000.00, 125000.00, 500000.00, 1000000.00];

//question array
const questions = [];

questions.push(new Question("Which of these games were released in 1996", "Super Mario 64", "Super Contra", "Super Mario World", "Donkey Kong"));

questions.push(new Question("Where is Nintendo World located", "New York City", "Toronto", "Buffalo", "LA"));

questions.push(new Question("The princess is in _____ _____", "Another castle", "Your house", "The wild", "The Kingdom"));

questions.push(new Question("Mario's last name is: ", "Mario", "Bro", "Luigi", "Man"));

questions.push(new Question("What does NES stand for?", "Nintendo Entertainment System", "Nintendo's Extra Stuff", "Nintendo's Encyption System", "Nintendo Education System"));

questions.push(new Question("When was Minecraft created?", "2009", "2010", "2008", "2011"));

questions.push(new Question("My body is ______", "Ready", "Not ready", "Here", "There"));

questions.push(new Question("What is the name of Megaman in japan?", "Rockman", "Metalman", "Cutman", "Still Megaman"));

questions.push(new Question("Who is the main character is the Legend of Zelda?", "Link", "Zelda", "Shiek", "Tetra"));

questions.push(new Question("Princess Zelda from The Legend of Zelda games by Nintendo has gone by a few names. Which of these names has she NOT been called in a video game?", "Malon", "Tetra", "Sheik", "She has only been called Zelda"));

questions.push(new Question("What was Mario originally refered to as?", "Jump man", "It was always Mario", "Red Luigi", "The Plummer Guy"));

questions.push(new Question("What video game console has the highest number of video game console sales of all time?", "Playstation 2", "Wii", "Xbox 360", "NES"));

questions.push(new Question("Who is the fastest of these video game characters?", "Sonic", "Mario", "Donkey Kong", "Little Mac"));

questions.push(new Question("What is the red ghost's name in pacman?", "Blinky", "Inky", "Clyde", "Pinky"));

questions.push(new Question("In Super Mario Bros, what colours was Mario's outfit?", "Red and Brown", "Red and blue", "Green and blue", "Orange and Brown"));

questions.push(new Question("Mario's first time saying 'It's-a me Mario!' in what game?", "Super Mario 64", "Super Mario World", "Super mario Sunshine", "Super Mario Galaxy"));

questions.push(new Question("What end of what year was the last Nintendo Power issue released?", "2012", "2010", "2008", "2014"));

questions.push(new Question("What year was the first Nintendo Power released", "1988", "1990", "1984", "1986"));

questions.push(new Question("Which of these games is considered a successor to Mario Paint", "Super Mario Maker", "Super Smash bros", "Mario Paint 2", "Hotel Mario"));

questions.push(new Question("How many Mario Kart games have been made? (excludes releases and must have been released on a nintendo console)", "8", "9", "6", "10"));

questions.push(new Question("Mike ______'s Punch-Out!!", "Tyson", "Huckabee", "Trout", "Sullivan"));

questions.push(new Question("When did Tetris come out?", "1984", "1980", "1986", "1989"));

questions.push(new Question("When did Super Mario World release in North America", "1991", "1988", "1992", "1995"));

questions.push(new Question("Super Mario World 2 ____________", "Yoshi's Island", "6 Golden Coins", "Bowser's revenge", "Wario World"));

questions.push(new Question("When did the virtual boy release in North America?", "1995", "1991", "1998", "2000"));

// helper functions

// sort randomizer
function ran(a, b) {  
  return 0.5 - Math.random();
}  

// displays a question
function display(q) {
  let str = q.question + '\n';
  
  for(let i = 0; i < q.options.length; i++) {
    str += `${i + 1}. `;
    str += q.options[i];
    str += '\n';
  }

  return prompt(str);

}
//////////////////////////



// performs all round logical operations.
// Accesses arrays globally.
// returns a bool determining if the player has to continue.
function round() {

  // static variables keeping track of data
  // required for future rounds
  if( typeof round.counter == 'undefined' ) {
    round.counter = 0;
    round.lifeline = 0;
  } 

  let msg = `Get ready for round ${round.counter + 1}`;

  if(round.counter > 0) {
    msg += " (need help? press l or L to use a lifeline)";
  }

  alert(msg)

  let done = false;

  // iterates for every question in a round
  for(let i = 0; i < QUESTIONS_PER_ROUND && !done; i++) {

    alert(`question ${i + (round.counter * QUESTIONS_PER_ROUND) + 1}: `);

    // random question chosen
    let rand = parseInt(Math.random() * questions.length);

    // randomizing options array stored in question object
    // so that the first option is not always the right 
    // answer.
    questions[rand].options.sort(ran);

    let used = false;
    
    // will loop if lifeline is used
    do {
      choice = display(questions[rand]);

      if(choice === 'l' || choice === 'L') {
        if(round.counter < 1) {
          alert(`You cannot use lifeline on the first round!`);
        } else if(round.lifeline >= MAX_LIFELINES) {
          alert(`Out of lifelines!`);
        } else if(used) {
          alert(`You already used lifeline on this round!`);
        } else {
          used = true;
          round.lifeline++;
          alert(`Using lifeline!`);
          let i = 0;
          let removed = 0;
          while(removed < 2) {
            if(questions[rand].options[i] !== questions[rand].correct) {
              removed++;
              questions[rand].options.splice(i, 1);
            }
            i++
          }
        }
      }
    } while(choice === 'l' || choice === 'L');

    // check if answer is correct
    if(questions[rand].options[choice - 1] === questions[rand].correct) {
      alert(`Excellent! you earned $${rewards[(round.counter * QUESTIONS_PER_ROUND) + i]}`);
      // remove question from list to ensure it is
      // not selected again.
      questions.splice(rand, 1);

      // logic if it is the last round.
      if(round.counter + 1 === MAX_ROUNDS && rewards[(round.counter * QUESTIONS_PER_ROUND) + i] === 1000000.00) {
        done = true;
      } else {
        done = false;
      }
      // if incorrect ...
    } else {
      alert(`I'm sorry, that is incorrect.`);

      // logic if it is the last round.
      if(round.counter + 1 === MAX_ROUNDS) {
        done = false;
        break;
      } else {
        done = true;
      }
    }

  }

  round.counter++;

  return done;

}
////////////////////


// start of script
let name = "";
let done = false;

name = prompt("Welcome to who wants to be a Millionaire.\nEnter your name: ");

alert(`Welcome ${name}`);

// game loop
for(let i = 0; i < MAX_ROUNDS && !done; i++) {

  done = round();

  // if last round ...
  if(i === MAX_ROUNDS - 1) {
    // if won ...
    if(done) {
      alert(`Congrats ${name}! you are a millionaire!`);
    // if lost ...
    } else {
      alert(`Game over!`);
      done = true;
    }
  } else {
    // if lost...
    if(done) {
      alert(`Game over!`);
    // if won round ...
    } else {
      let ans = prompt(`Would you like to leave with the money(y or n)?`);
      if(ans === 'Y' || ans === 'y') {
        done = true;
        alert(`Congrats ${name}! You won $${rewards[i * QUESTIONS_PER_ROUND + ROUND_EARN_END_OFFSET]}`);
      }
    }
  }
 

}
