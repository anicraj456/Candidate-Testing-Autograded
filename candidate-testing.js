const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";


// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions =  ['Who was the first American woman in space? ','True or false: 5 kilometer == 5000 meters? ','(5 + 3)/2 * 10 = ? ','Given the array [8, \'Orbit\', \'Trajectory\', 45], what entry is at index 2? ' , 'What is the minimum crew size for the ISS? '];
let correctAnswers = ["Sally Ride" , "true" , "40" ,"Trajectory" , "3" ];
let candidateAnswers = [];

//runProgram();

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  let i;
  for(i=0;i<questions.length;i++){
    console.log(questions[i]);
    candidateAnswers[i] = input.question("Enter your answer-------");
    console.log(candidateAnswers[i]);
  }
  console.log("answer array "+candidateAnswers);
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let score = 0;
  console.log(candidateAnswers);
  let j;
  for (j=0;j<candidateAnswers.length;j++){
    console.log(candidateAnswers[j]);
    console.log(correctAnswers[j]);
    if(candidateAnswers[j].toUpperCase() === correctAnswers[j].toUpperCase() ){
      console.log("correct answer");
      score++
    } else{ 
      console.log("wrong answer");
    }
    }

    //TODO 3.2 use this variable to calculate the candidates score.
 //console.log("The total grade is "+grade);
 let grade = 0;

 console.log("grade "+ score);
 console.log(questions.length);
 
 grade = (score / questions.length) * 100 ;

 console.log("Grade percentage   "+ grade);
 
  if(grade >= 80){
   console.log("you have passed");
 }else  {
   console.log("you have failed");
 }
    console.log("Total number of correct answers   "+ score );
    return grade;
  }

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello, " + candidateName );
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};

