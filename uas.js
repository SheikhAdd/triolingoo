const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          compareHands(this.textContent, computerChoice);
          playerHand.src = `${this.textContent}.png`;
          computerHand.src = `${computerChoice}.png`;
        }, 2000);
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    if (pScore === 3) {
      alert("Player is the winner!");
      window.location.href = "index.html";
    }
    else if (cScore===3){
      alert("Computer is the winner! Try again next time");
      window.location.href = "index.html";
    }
   
    
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
   
    checkGameEnd();
  };

  const checkGameEnd = () => {
    const resultScreen = document.querySelector('.result-screen');
    const gameResult = document.querySelector('.game-result');
    const resultImg = document.querySelector('.result-img');
    const restartBtn = document.querySelector('.restart-btn');
  
    if (pScore >= 5) {
      gameResult.textContent = 'Player Wins!';
      resultImg.src = 'win.jpg';
      resultScreen.classList.remove('fadeOut');
      resultScreen.classList.add('fadeIn');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000);
    } else if (cScore >= 5) {
      gameResult.textContent = 'Computer Wins!';
      resultImg.src = 'lose.jpg';
      resultScreen.classList.remove('fadeOut');
      resultScreen.classList.add('fadeIn');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000);
    }
  
    restartBtn.addEventListener('click', () => {
      pScore = 0;
      cScore = 0;
      resultScreen.classList.add('fadeOut');
      resultScreen.classList.remove('fadeIn');
      updateScore();
    });
  };
  
  
  
  startGame();
  playMatch();
};

game();
