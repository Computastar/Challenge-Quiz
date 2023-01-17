//Section list
const QUIZ_SECTIONS = document.querySelectorAll(".quiz-section");

//Start
const START_SECTION = document.getElementById("start");
const START_BTN = document.getElementById("start-button");

//Quiz questions
const QUIZ_SECTION = document.getElementById("quiz-questions");
const TIME_REMAINING = document.getElementById("time-remaining");
const QUESTION = document.getElementById("question");
const CHOICES = document.getElementById("choices");
const CHOICE_STATUSES = document.querySelectorAll(".choice-status");
const CORRECT = document.getElementById("correct");
const WRONG = document.getElementById("wrong");

//End
const END_SECTION = document.getElementById("end");
const END_TITLE = document.getElementById("end-title");
const SCORE = document.getElementById("score");
const INITIALS_INPUT = document.getElementById("initials");
const SUBMIT_SCORE = document.getElementById("submit-score");
const ERROR_MESSAGE = document.getElementById("error-message");

const QUESTION_1 = new Question("Commonly used data types DO NOT include: ", 
  ["Strings", "Booleans", "Alerts", "Numbers"], 2);
const QUESTION_2 = new Question("The condition in an if / else statement is enclosed within ____.", 
  ["Quotes", "Curly brackets", "Parentheses", "Square brackets"], 2);
const QUESTION_3 = new Question("Arrays in JavaScript can be used to store ____.", 
  ["Numbers and Strings", "Other arrays", "Booleans", "All of the above"], 3);
const QUESTION_4 = new Question("String values must be enclosed within _____ when being assigned to variables.", 
  ["Commas", "Curly brackets", "Quotes", "Parentheses"], 2);
const QUESTION_5 = new Question("A very useful tool used during development and debugging for printing content to the debugger is: ", 
  ["JavaScript", "Terminal/Bash", "For Loops", "console.log"], 3);
const QUESTION_LIST = [QUESTION_1, QUESTION_2, QUESTION_3, QUESTION_4, QUESTION_5];

let currentQuestion = 0;

let totalTime = 60;
let totalTimeInterval;
let choiceStatusTimeout; 

// A start button function
    // loads Q&A
    // starts timer
//  timer starts
    // Timer function
    // countdown
    // display
    // get game stop
    // stop at zero
// 
    
    //Timer connected to:
        // Game start f
        // Game stop f
        // timer display
        // Incorrect answer - time deduction
    
//gamestart function
    // trigger from button
    // start timer
    // call show questions and choices function
    // hide submit button
    // hide instructions
// toggle class attribute hide
    //  start-screen
    // questions container 
//Gamestop function
    // trigger from
        //  last question 
        // timer zero
    // announces score
    // gets initials
    // post to local storage
    // show submit button
    // show instructions
    
// highscore function
    // on load, update from local storage
    // rank by score 
    // activate clear highscores button
    
// clear highscore function
    // clears LS
// Q&A function 
    // get q&A
    // display
    // interactive
    // on click
        // show choice
        // show correct answer
        // clear
        // get new questions
// choice display
// evaluate choice function