//your JS code here.

// Do not change code below this line
// This code will just display the questions to the screen
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

// Display the quiz questions and choices;
let userAnswers = JSON.parse(sessionStorage.getItem("answers")) || [];
function renderQuestions() {
	let questionsElement = document.getElementById("questions");
	
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div");
    const questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);
    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);

		 choiceElement.addEventListener("change", function () {
        // Save the user's answer in session storage
			 // let userAnswers = JSON.parse(sessionStorage.getItem("answers"));
        userAnswers[i] = choice;
        sessionStorage.setItem("answers", JSON.stringify(userAnswers));
      });
		
      if (userAnswers[i] === choice) {
        choiceElement.setAttribute("checked", true);
      }
      const choiceText = document.createTextNode(choice);
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
    }
    questionsElement.appendChild(questionElement);
  }
}
renderQuestions();

document.getElementById("submit").addEventListener("click", function () {
  let score = 0;
console.log(userAnswers,questions)
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const userAnswer = userAnswers[i];
	console.log(question.answer,userAnswer);
    if (userAnswer === question.answer) {
      score++;
    }
  }

  // Display the user's score;
  const scoreDisplay = document.getElementById("score");
  scoreDisplay.textContent = `Your score is ${score} out of ${questions.length}.`;
	localStorage.setItem("score",score)
});

if(localStorage.getItem("score")){
	 const scoreDisplay = document.getElementById("score");
  scoreDisplay.textContent = `Your score is ${JSON.parse(localStorage.getItem("score"))} out of ${questions.length}.`;
	
}
