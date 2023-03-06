var questionsArr = [
  {
    title: "what does HTML stand for...",
    choices: [" hypertext markup language", "cascade style sheet", "JavaScript", 'Bootstrap'],
    answer: "hypertext markup language"
  },
  {
    title: "Arrays in Javascript can be used to store...",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  }]
// all var
var score = 0;
var questionIndex = 0;


//elements
var presentTime = document.querySelector("#startTime");
var questions = document.querySelector("#questions");
var wrapper = document.querySelector("#wrapper");
var intro = document.querySelector("#intro");
var ulcreate = document.querySelector("#choicesUl")
var questionTitle = document.querySelector("#questionTitle")

//timer
var secondsLeft = 76;
var holdInterval = 0;
var penalty = 10;

//
// TimeRanges.addEventListner("click", function() {

//   if (holdInterval === 0){
//     holdInterval = setInterval(function(){
//     secondsLeft--;
//       presentTime.textContent = "Time's up!";

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
presentTime.addEventListener("click", function () {
  //intro.style.display = "none"
  intro.classList.add("hide")
  questions.classList.remove("hide")
  render(0)
})
function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
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