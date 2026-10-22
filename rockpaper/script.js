
let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];

    const computerChoice =
        choices[Math.floor(Math.random() * 3)];

    document.getElementById("user-choice").textContent =
        "You: " + userChoice;

    document.getElementById("computer-choice").textContent =
        "Computer: " + computerChoice;

    let message = "";

    if (userChoice === computerChoice) {
        message = "It's a Draw! 🤝";
    } 
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        message = "You Win! 🎉";
        userScore++;
    } 
    else {
        message = "Computer Wins! 🤖";
        computerScore++;
    }

    document.getElementById("message").textContent = message;

    document.getElementById("user-score").textContent =
        userScore;

    document.getElementById("computer-score").textContent =
        computerScore;
}

function resetGame() {
    userScore = 0;
    computerScore = 0;

    document.getElementById("user-score").textContent = 0;
    document.getElementById("computer-score").textContent = 0;

    document.getElementById("user-choice").textContent = "You: -";
    document.getElementById("computer-choice").textContent =
        "Computer: -";

    document.getElementById("message").textContent = "Let's Play!";
}
