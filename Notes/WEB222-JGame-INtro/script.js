class Question 
{ 
    constructor(t,oA,oB,oC)
    {
      this.title=t;
      this.optionA=oA;
      this.optionB=oB;
      this.optionC=oC;
    }

    displayEntireQuestion()
    {
      console.log(`Hi, can you please read the below question and answer by choising one of 3 options : `);
      console.log(`${this.title}`);
      console.log(`A. ${this.optionA}`);
      console.log(`B. ${this.optionB}`);
      console.log(`C. ${this.optionC}`);
    }

}

const dBOfQuestions=[];
dBOfQuestions.push(new Question("Who invented the WWW?","Kadeem Best","Tim Bernes-Lee","Barack Obama"));
dBOfQuestions.push(new Question("Who is the Current President of the US?","Bill Gates","Donald Trump","Batman"));
dBOfQuestions.push(new Question("In 2018, what was deemed the most popular language?","JavaScript","Java","Ruby"));

dBOfQuestions[(Math.random() * dBOfQuestions.length)].displayEntireQuestion();