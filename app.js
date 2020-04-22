var userscore = 0;
var computerscore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissor");

function getCompChoice() {
  const choices = ["r", "p", "s"];
  var temp = choices[Math.floor(Math.random() * 3)];
  if (temp == "r") {
    document
      .getElementById("comp-mov")
      .setAttribute("src", "./images/rock.png");
  } else if (temp == "p") {
    document
      .getElementById("comp-mov")
      .setAttribute("src", "./images/paper.png");
  } else {
    document
      .getElementById("comp-mov")
      .setAttribute("src", "./images/scissors.png");
  }
  return temp;
}
function reset() {
  userscore = 0;
  computerscore = 0;
  userScore_span.innerText = userscore;
  compScore_span.innerText = computerscore;
}
function win() {
  userscore++;
  userScore_span.innerText = userscore;
  document.querySelector(".live").style.color = "green";
  setTimeout(function() {
    document.querySelector(".live").style.color = "white";
  }, 1000);
}
function lose() {
  computerscore++;
  compScore_span.innerText = computerscore;
  document.querySelector(".live").style.color = "red";
  setTimeout(function() {
    document.querySelector(".live").style.color = "white";
  }, 1000);
}
function draw() {
  document.querySelector(".live").style.color = "white";
}
function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rs":
      result_div.innerHTML =
        "Rock<sub>USER</sub>hits Scissor<sub>COMP</sub>.You win!";
      win();
      break;
    case "pr":
      result_div.innerHTML =
        "Paper<sub>USER</sub>covers Rock<sub>COMP</sub>.You win!";
      win();
      break;
    case "sp":
      result_div.innerHTML =
        "Scissor<sub>USER</sub>cuts Paper<sub>COMP</sub>.You win!";
      win();
      break;
    case "rp":
      result_div.innerHTML =
        "Paper<sub>COMP</sub>covers Rock<sub>USER</sub>.You lose :(";
      lose();
      break;
    case "ps":
      result_div.innerHTML =
        "Scissor<sub>COMP</sub>cuts Paper<sub>USER</sub>.You lose :(";
      lose();
      break;
    case "sr":
      result_div.innerHTML =
        "Rock<sub>COMP</sub>hits Scissor<sub>USER</sub>.You lose :(";
      lose();
      break;
    case "rr":
    case "pp":
    case "ss":
      result_div.innerText = "Its a draw!!!";
      draw();
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  });
  paper_div.addEventListener("click", function() {
    game("p");
  });
  scissors_div.addEventListener("click", function() {
    game("s");
  });
}

main();
