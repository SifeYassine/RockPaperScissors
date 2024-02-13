"use strict";

let computerPick = Math.trunc(Math.random() * 3) + 1;
let computerScore = 5;
let playerScore = 5;
let highscore = 0;
let playerPick;

// Store player choice
document
  .querySelector(".play")
  .addEventListener("click", function eventHandler() {
    playerPick = Number(document.querySelector(".picker").value);

    // Determins which player have won
    if (playerPick === computerPick) {
      playerScore;
      computerScore;
    } else if (
      (playerPick === 1 && computerPick === 3) ||
      (playerPick === 2 && computerPick === 1) ||
      (playerPick === 3 && computerPick === 2)
    ) {
      computerScore--;
    } else if (
      (playerPick === 1 && computerPick === 2) ||
      (playerPick === 2 && computerPick === 3) ||
      (playerPick === 3 && computerPick === 1)
    ) {
      playerScore--;
    }
  });

function revealImages(playerPick, computerPick) {
  if (playerPick === 1 || playerPick === 2 || playerPick === 3) {
    // Reveal Correspondents Cards
    document.querySelector(
      ".computer"
    ).style.backgroundImage = `url('image${computerPick}.jpg')`;
    document.querySelector(
      ".player"
    ).style.backgroundImage = `url('image${playerPick}.jpg')`;

    // Add a class to trigger the flip animation
    document.querySelector(".computer").classList.add("flipped");
    document.querySelector(".player").classList.add("flipped");
  }
}

document
  .querySelector(".reveal")
  .addEventListener("click", function eventHandler() {
    if (computerScore === 0) {
      if (playerScore > highscore) {
        highscore = playerScore;
      } else {
        highscore = highscore;
      }
    }
    document.querySelector(".score-computer").textContent = computerScore;
    document.querySelector(".score-player").textContent = playerScore;
    document.querySelector(".highscore").textContent = highscore;

    revealImages(playerPick, computerPick);
  });

function resetGame() {
  if (computerScore === 0 || playerScore === 0) {
    computerScore = 5;
    playerScore = 5;
  }
  computerPick = Math.trunc(Math.random() * 3) + 1;

  document.querySelector(".score-computer").textContent = computerScore;
  document.querySelector(".score-player").textContent = playerScore;
  document.querySelector(".picker").value = "";

  // Remove the flip animation class
  document.querySelector(".computer").classList.remove("flipped");
  document.querySelector(".player").classList.remove("flipped");

  // Reset card backgrounds
  document.querySelector(".computer").style.backgroundImage = "url('back.png')";
  document.querySelector(".player").style.backgroundImage = "url('back.png')";
}

document
  .querySelector(".again")
  .addEventListener("click", function eventHandler() {
    resetGame();
  });
