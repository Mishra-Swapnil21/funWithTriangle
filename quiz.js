const resultButton = document.querySelector("#submit-button");
const quizForm = document.querySelector(".quiz-form");
const output = document.querySelector("#output");
const correctAnswer = ["90°","right-angled"];

function calculateScore(){
 let score = 0;
 let index = 0;
 const formResult =new FormData(quizForm);
 console.log(formResult);
}

resultButton.addEventListener('click', calculateScore)