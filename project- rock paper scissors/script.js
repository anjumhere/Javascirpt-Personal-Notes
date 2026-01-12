// let choice = document.querySelectorAll(".choice img");
// choice.forEach((img) => {
//   img.addEventListener("click", () => {
//     const userChoice = img.alt;
//     console.log(userChoice + "was clicked");
//   });
// });

let choice = document.querySelectorAll(".choice");
const messg = document.querySelector("#msg");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let color = document.querySelector(".message-container");
console.log(compScore.innerText);

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

let drawGame = () => {
  console.log("Its's a draw ");
  messg.innerText = "Its a draw , try again.";
  color.style.backgroundColor = "grey";
};
const playGame = (userChoice) => {
  console.log("User choice = ", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer choice = ", compChoice);
  const showWiner = (userWin) => {
    if (userWin) {
      console.log("You win");
      messg.innerText = "You win!";
      color.style.backgroundColor = "green";
      userScore.innerText++;
    } else {
      console.log("You loose!");
      messg.innerText = "You loose!";
      color.style.backgroundColor = "red";
      color.style.color = "white";
      compScore.innerText++;
    }
  };
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "paper") {
      // scissors or rock
      userWin = compChoice === "scissors" ? false : true;
    } else if (userChoice === "paper") {
      // rock or scissors
      compChoice === "rock" ? true : false;
    } else {
      //scissor , paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWiner(userWin);
  }
};
choice.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    // console.log("User clicked = ", userChoice);
    playGame(userChoice);
  });
});
