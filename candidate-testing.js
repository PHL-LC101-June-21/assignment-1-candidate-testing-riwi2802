const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space?";
let correctAnswer = "sally ride";
let candidateAnswer = " ";
let questions = ["Who was the first American Woman in space? : ", "True or false: 5 kilometer == 5000 meters? : ", "(5 + 3)/2 * 10 = ? : ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? : ", "What is the minimum crew size for the ISS : "
];
let correctAnswers = ["sally ride", "true", "40", "trajectory", "3"];
let candidateAnswers = [];
let questionNumber = [1, 2, 3, 4, 5]
let numberOfCorrectAnswers = 0
let grade 
let j

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  let candidateAnswer = input.question("Who was the first American woman in space? : ")
    if (candidateAnswer.toLowerCase() === correctAnswer ) {
      console.log("Congrats! This is correct.")
    } else {
        console.log("Sorry. This is not correct. The correct answer was Sally Ride.");
      }
}




let i = 0;

for (let i = 0; i < questions.length; i++) { 
  candidateAnswers[i] = input.question(questions[i]);
}
for (let i = 0; i < questions.length; i++) { 
  console.log(`You responded with ${candidateAnswers[i]} for question number ${questionNumber[i]}`)
}

for (let j = 0; j <= 4 ; j++)
{
  if (candidateAnswers[j].toLowerCase() === correctAnswers[j]) 
  {
    numberOfCorrectAnswers++
  }
}


let t = 0

function gradeQuiz(numberOfCorrectAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade = numberOfCorrectAnswers / 5 * 100
  
 console.log(grade)
  return grade;
 
}

console.log("You scored " + gradeQuiz(numberOfCorrectAnswers) + " percent")

if (numberOfCorrectAnswers >= 4) {
      console.log("Congrats! you're going to space!")
    } else {
        console.log("Sorry, you failed")
      }




function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 let candidateName = input.question("What is your name? : ")
 console.log("Hello ", candidateName, "!")
};



  //askQuestion();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
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