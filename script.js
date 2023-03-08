var questionsArr = [
  {
    title: "what does HTML stand for...",
    choices: ["hypertext markup language", "cascade style sheet", "JavaScript", 'Bootstrap'],
    answer: "hypertext markup language"
  },
  {
    title: "Arrays in Javascript can be used to store...",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
   { title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "terminal / bash", "for loops", "console log"],
    answer: "console log"
  },]


  // all var
var score = 0;
var questionIndex = 0;


//elements
var startQuizBtn = document.querySelector("#startTime");
var timerEl = document.querySelector("#timerEl");
var questions = document.querySelector("#questions");
var wrapper = document.querySelector("#wrapper");
var intro = document.querySelector("#intro");
var choicesEl = document.getElementById('choicesEl')
var questionTitle = document.querySelector("#questionTitle")
var feedback = document.querySelector('#feedback')
//timer
var secondsLeft = 76;
var holdInterval = 0;
var penalty = 10;

var timer;

function startClock() {
  secondsLeft--

  timerEl.textContent = secondsLeft

  if (secondsLeft <= 0) {
    endGame()
  }

}

function endGame() {
  clearInterval(timer)
}
//
// TimeRanges.addEventListner("click", function() {

//   if (holdInterval === 0){
//     holdInterval = setInterval(function(){
//     secondsLeft--;
//       startQuizBtn.textContent = "Time's up!";

//   }, 1000);
// }
//   render(questionIndex);
// });

function render(questionIndex) {
  questionTitle.innerHTML = "";
  ulcreate.innerHTML = "";
  // debugger;

  questionTitle.textContent = questionsArr[questionIndex].title;
  // var userChoices = questions[0].choices;
  //   questions.textContent = userQuestions;

  // userChoices.forEach(function (newItem) {
  //   var listItem = document.createElement("li");
  //   listItem.textContent = newItem;
  //   ulcreate.appendChild(listItem);
  //   listItem.addEventListener("click", (compare));
  // })
}
startQuizBtn.addEventListener("click", function () {
  //intro.style.display = "none"
  intro.classList.add("hide")
  questions.classList.remove("hide")

  timer = setInterval(startClock, 1500)

  // render(0)
  getQuestion()
})
function getQuestion() {
  // questionTitle.textContent = questionsArr[questionIndex].title;
  var currentQuestion = questionsArr[questionIndex];
  console.log(currentQuestion)
  var titleEl = document.getElementById('question-title');
  titleEl.textContent = currentQuestion.title;

  choicesEl.innerHTML = '';
  for (var i = 0; i < currentQuestion.choices.length; i++) {

    var choice = currentQuestion.choices[i];
    var choiceNode = document.createElement('button');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choice);

    choiceNode.textContent = i + 1 + '. ' + choice;

    choicesEl.appendChild(choiceNode);
  }
}

function answerClicked(event) {
  var buttonElement = event.target;

  console.log(buttonElement.value)

  if (buttonElement.value !== questionsArr[questionIndex].answer) {
    secondsLeft -= 15;

    if (secondsLeft < 0) {
      secondsLeft = 0
    }

    timerEl.textContent = secondsLeft


    feedback.textContent = 'wrong answer try again'
  } else {
    feedback.textContent = 'correct'
  }

  questionIndex++

  if (secondsLeft <= 0 || questionIndex === questionsArr.length) {
    endGame()
  } else {
    getQuestion()
  }
}
function viewHighScores() {
  console.log('clicked')
  window.location.href = 'highscore.html'
}

var viewHighScoresButton = document.querySelector('#high-scores-link')
viewHighScoresButton.onclick = viewHighScores;

choicesEl.onclick = answerClicked;