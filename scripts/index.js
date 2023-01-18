/* Lets setup some Constants against Elements */
const startBtn = document.getElementById("start");
const stimeRemaining = document.getElementById("time");
const choices = document.getElementById("choices");
const quizSections = document.querySelectorAll(".quiz-section");
const quizSection = document.getElementById("quiz-questions")
const question = document.getElementById("question");
const choiceStatus = document.querySelectorAll(".choice-status");
const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");
const endSection = document.getElementById("end-screen");
const endTitle = document.getElementById("end-title");
const score = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitScore = document.getElementById("submit-score");
const errorMessage = document.getElementById("error-message");

/* Define the questions */
let Questions = [
  {
    number: 1,
    Question: "Commonly used data types DO NOT include? ",
    Answer: "Alerts",
    Options: [
      "Strings",
      "Booleans",
      "Alerts",
      "Numbers"
    ]
  },
  {
    number: 2,
    Question: "The condition in an if / else statement is enclosed within ____?",
    Answer: "Parentheses",
    Options: [
      "Quotes",
      "Curly brackets",
      "Parentheses",
      "Square brackets"
    ]
  },
  { 
    number: 3,
    Question: "Arrays in JavaScript can be used to store ____?",
    Answer: "All of the above",
    Options: [
      "Numbers and Strings",
      "Other arrays",
      "Booleans",
      "All of the above"
    ]
  },
  {
    number: 4,
    Question: "String values must be enclosed within _____ when being assigned to variables?",
    Answer: "Quotes",
    Options: [
      "Commas",
      "Curly brackets",
      "Quotes", 
      "Parentheses"
    ]
  },
  {
    number: 5,
    Question: "A very useful tool used during development and debugging for printing content to the debugger is?",
    Answer: "console.log",
    Options: [
      "JavaScript", 
      "Terminal / Bash",
      "For Loops",
      "console.log"
    ]
  }
]

/* Lets set some varibles */
let currentQuestion = 0;
let totalTime = 60;
let totalTimeInterval;
let choicestatusTimeout; 


/* Event Listerners */ 
startBtn.addEventListener('click', startGame);
choices.addEventListener('click', processChoice);
submitScore.addEventListener('submit', processInput);


/* Lets crack on then */ 
function startGame() {
    showElement(quizSections, quizSection);
  
    displayTime();  
    displayQuestion();
    startTimer();
  }

  /* Timer Functions */ 
function displayTime() {
    stimeRemaining.textContent = totalTime;
  }
  
  function startTimer() {
    totalTimeInterval = setInterval(function() {
      totalTime--;
      displayTime();
      checkTime();
  
    }, 1000);
  }

  function checkTime() {
    if (totalTime <= 0) {
      totalTime = 0;
      endGame();
    }
  }
  
  /* Show/Hide Elements */ 
function showElement(siblingList, showElement) {
    for (element of siblingList) {
      hideElement(element);
    }
    showElement.classList.remove("hide");
  } 
  
  function hideElement(element) {
    if (!element.classList.contains("hide")) {
      element.classList.add("hide");
    }
  }

/* Question Functions */ 
function displayQuestion() {
  question.textContent = Questions[currentQuestion].Question;
  displayChoiceList();
  }
  
/* Build out answer option */
function displayChoiceList() {
  choices.innerHTML = "";

  Questions[currentQuestion].Options.forEach(function (answer, index) {
    const li = document.createElement("li");
    li.dataset.index = index;
    const button = document.createElement("button");
    button.textContent =  answer;
    li.appendChild(button);
    choices.appendChild(li);
  });
}

 /* Get users choice */
  function processChoice(event) {
    const userChoice = event.target.textContent;
    resetchoicestatusEffects();
    checkChoice(userChoice);
    getNextQuestion();
  }

  /* Reset Choices */
  function resetchoicestatusEffects() {
    clearTimeout(choicestatusTimeout);
    styleTimeRemainingDefault();
  }

  /* Displaying choice status */
  function resetchoicestatusEffects() {
    clearTimeout(choicestatusTimeout);
    styleTimeRemainingDefault();
  }
  
  /* Style time remianing */
  function styleTimeRemainingDefault() {
    stimeRemaining.style.color = "#4616E8";
  }
  
/* Style time remianing */
  function styleTimeRemainingWrong() {
    stimeRemaining.style.color = "#E81648";
  }

  /* Check users choice and call effect */
  function checkChoice(userChoice) {
    if (isChoiceCorrect(userChoice)) {
      displayCorrectChoiceEffects();
    } else {
      displayWrongChoiceEffects();
    }
  }

  /* Check users choice matches answer */
  function isChoiceCorrect(choice) {
    return choice === Questions[currentQuestion].Answer; 
  }

  /* Display Wrong if Wrong */
  function displayWrongChoiceEffects() {
    deductTimeBy(10);
  
    styleTimeRemainingWrong();
    showElement(choiceStatus, wrong);
  
    choicestatusTimeout = setTimeout(function() {
      hideElement(wrong);
      styleTimeRemainingDefault();
    }, 1000);
}
  
/* Display Correct if Correct */
function displayCorrectChoiceEffects() {
  showElement(choiceStatus, correct);

  choicestatusTimeout = setTimeout(function () {
    hideElement(correct);
  }, 1000);
}
  
  /* Lets minus some time from totl */
  function deductTimeBy(seconds) {
    totalTime -= seconds;
    checkTime();
    displayTime();
  }
  

/* Get next question */
function getNextQuestion() {
    currentQuestion++;
    if (currentQuestion >= Questions.length) {
      endGame();
    } else {
      displayQuestion();
    }
  }

/* Finish the game */ 
function endGame() {
    clearInterval(totalTimeInterval);
    
    showElement(quizSections, endSection);
    displayScore();
    setEndHeading();
  }
  
  /* Update score */
  function displayScore() {
    score.textContent = totalTime;
  }
  
  /* Display end message */
 function setEndHeading() {
    if (totalTime === 0) {
      endTitle.textContent = "Sorry! You ran out of time!";
    } else {
      endTitle.textContent = "Congratulations! You answered all the questions before your time ran out!";
    }
  }

/* Submit Name */ 
function processInput(event) {
  event.preventDefault();

  const initials = initialsInput.value.toUpperCase();

  if (isInputValid(initials)) {
    const score = totalTime;
    const highscoreEntry = getNewHighscoreEntry(initials, score);
    saveHighscoreEntry(highscoreEntry);
    window.location.href= "./highscores.html";
  }
}

/* Get high scrore details */
function getNewHighscoreEntry(initials, score) {
  const entry = {
    initials: initials,
    score: score,
  }
  return entry;
}

/* Check inout is valid */
function isInputValid(initials) {
  let errorMessage = "";
  if (initials === "") {
    errorMessage = "You can't submit empty initials!";
    displayFormError(errorMessage);
    return false;
  } else if (initials.match(/[^a-z]/ig)) {
    errorMessage = "Initials may only include letters."
    displayFormError(errorMessage);
    return false;
  } else {
    return true;
  }
}

/* On error display error */
function displayFormError(errorMessage) {
  errorMessage.textContent = errorMessage;
  if (!initialsInput.classList.contains("error")) {
    initialsInput.classList.add("error");
  }
}

/* Save scroe to local storage */
function saveHighscoreEntry(highscoreEntry) {
  const currentScores = getScoreList();
  placeEntryInHighscoreList(highscoreEntry, currentScores);
  localStorage.setItem('scoreList', JSON.stringify(currentScores));
}

/* Get high scores from local storage */
function getScoreList() {
  const currentScores = localStorage.getItem('scoreList');
  if (currentScores) {
    return JSON.parse(currentScores);
  } else {
    return [];
  }
}

/* Add high score to list */
function placeEntryInHighscoreList(newEntry, scoreList) {
  const newScoreIndex = getNewScoreIndex(newEntry, scoreList);
  scoreList.splice(newScoreIndex, 0, newEntry);
}

/* Get scores indes */
function getNewScoreIndex(newEntry, scoreList) {
  if (scoreList.length > 0) {
    for (let i = 0; i < scoreList.length; i++) {
      if (scoreList[i].score <= newEntry.score) {
        return i;
      }
    } 
  }
  return scoreList.length;
}