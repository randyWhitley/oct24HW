const startButton = document.getElementById("start-btn");
//const questionContainerElement = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
//const info_box = document.querySelector(".info_box");
//const exit_btn = info_box.querySelector(".buttons .quit");
//const continue_btn = info_box.querySelector(".buttons .restart");
//const quiz_box = document.querySelector(".quiz_box");
//const result_box = document.querySelector(".result_box");
//const option_list = document.querySelector(".option_list");
//const time_line = document.querySelector("header .time_line");
//const timeText = document.querySelector(".timer .time_left_txt");
//const timeCount = document.querySelector(".timer .timer_sec");

const nextButton = document.getElementById("next-btn");

let shuffledQuestions;
let currentQuestionIndex = 0;
//startButton.onclick = ()=>{
  startButton.addEventListener("click", handleStart);
  function handleStart(){
    info_box.classList.add("activeInfo");
  }


//array of question objects, global so they are accessible to all functions
const questions = [
  {
    questionNumber1: " How many hours did it take Michael Myers to put on the Fat bastard fat-suit?",
    answers: [
      "2 hours", "5 hours", "7 hours", "24 hours"
    ],
    correct: "7 hours"
    
  },
  {
    questionNumber2: "Who was Powers' main villian?",
    answers: [
      "Charlie Werness", "Mike Pence", "Dr. Evil", "Megatron "
    ],
    correct: "Dr. Evil"
  },
  {
    questionNumber3: "What are the sexy-female Androids called in the Austin Powers franchise?",
    answers: [
      "fembot", "manbot", "Magic Mike", "Harley Quinn"
    ],
    correct: "fembot"
  },
  {
    questionNumber4: "In the film Dr. Evil threats the United Nations to hold the world for a ransom of _______ to which they laugh.",
    answers: [
      "100 billon dollars", "1 trillon dollars", "1 million dollars", " 25 millon dollars"
    ],
    correct: "1 million dollars"
  },

  {
    questionNumber5: "Which romatic Burt Bacharach song is played in the film as  Powers and Vanessa ride on the roof of the bus? ",
    answers: [
      "Sippin On Some Sizzurp", "I Started A Joke ", " What the World Needs Now is Love", " Where Is My Mind"
    ],
    correct: " What the World Needs Now is Love"
  },



];
//loop through question object to get the questions / answers to render one at a time
//for (let questionIndex = 0; questionIndex < questions.length; questionIndex++) {
  //console.log("current question index:", questionIndex);

//}
for (let i = 0; i < questions.length; i++) {
    console.log(questions[0].question);
    console.log(questions[0].answers);
  
    
}
//class hide


//event listener for starting the game
startButton.addEventListener("click", startGame());
//event listener for moving from one q to the next
nextButton.addEventListener("click", () => {
  //current question index incrementer that moves us through the quiz
  currentQuestionIndex++;
  // do we need setNext Question? What is it doing for us?
  //setNextQuestion()
});

function startGame() {
    //console.log('start game function is working');
  //hiding the start button
  startButton.classList.add("hide");
  //shuffle the question order
  //shuffledQuestions = questions.sort(() => Math.random() - 0.5);

  //question index is assigned to 0 again
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  // setNextQuestion()
}

// function setNextQuestion() {
// resetState()
//  showQuestion(shuffledQuestions[currentQuestionIndex])
// }

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

//function resetState() {
// clearStatusClass(document.body)
// nextButton.classList.add('hide')
// while (answerButtonsElement.firstChild) {
//  answerButtonsElement.removeChild(answerButtonsElement.firstChild)
// }
//}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
