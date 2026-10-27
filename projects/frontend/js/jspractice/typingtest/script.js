
const passages = [
  "Success comes from consistent practice and patience. Every small step you take today brings you closer to your goals. Keep learning, stay focused, and never stop improving your skills.",

  "Programming teaches us how to solve problems with logic and creativity. Write clean code, test your ideas, learn from mistakes, and build something useful every day.",

  "A good developer is not someone who knows everything. A good developer keeps learning, asks questions, solves problems, and turns simple ideas into working projects."
];

const quote = document.getElementById("quote");
const input = document.getElementById("input");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
const mistakesEl = document.getElementById("mistakes");
const message = document.getElementById("message");
const startBtn = document.getElementById("start");
const restartBtn = document.getElementById("restart");

let passage = "";
let timeLeft = 60;
let timer = null;
let started = false;
let finished = false;

function loadPassage() {
  passage = passages[Math.floor(Math.random() * passages.length)];

  quote.innerHTML = "";

  passage.split("").forEach((character, index) => {
    const span = document.createElement("span");
    span.textContent = character;

    if (index === 0) {
      span.classList.add("current");
    }

    quote.appendChild(span);
  });
}

function startTest() {
  clearInterval(timer);

  timeLeft = 60;
  started = true;
  finished = false;

  input.value = "";
  input.disabled = false;
  input.focus();

  timeEl.textContent = "60s";
  wpmEl.textContent = "0";
  accuracyEl.textContent = "100%";
  mistakesEl.textContent = "0";
  message.textContent = "Type the text shown above.";

  loadPassage();
  startBtn.textContent = "Test Running";

  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft + "s";
    updateStats();

    if (timeLeft <= 0) {
      endTest();
    }
  }, 1000);
}

function updateStats() {
  const typed = input.value;
  const spans = quote.querySelectorAll("span");

  let correct = 0;
  let mistakes = 0;

  spans.forEach((span, index) => {
    span.classList.remove("correct", "wrong", "current");

    if (index < typed.length) {
      if (typed[index] === passage[index]) {
        span.classList.add("correct");
        correct++;
      } else {
        span.classList.add("wrong");
        mistakes++;
      }
    } else if (index === typed.length && !finished) {
      span.classList.add("current");
    }
  });

  const elapsed = 60 - timeLeft;
  const minutes = elapsed / 60;

  const wpm = minutes > 0
    ? Math.round((correct / 5) / minutes)
    : 0;

  const totalTyped = typed.length;
  const accuracy = totalTyped > 0
    ? Math.round((correct / totalTyped) * 100)
    : 100;

  wpmEl.textContent = wpm;
  accuracyEl.textContent = accuracy + "%";
  mistakesEl.textContent = mistakes;

  if (typed.length >= passage.length) {
    endTest();
  }
}

function endTest() {
  clearInterval(timer);
  finished = true;
  started = false;
  input.disabled = true;
  startBtn.textContent = "Start Again";
  message.textContent =
    `Test completed! Final speed: ${wpmEl.textContent} WPM.`;
}

input.addEventListener("input", () => {
  if (started && !finished) {
    updateStats();
  }
});

startBtn.addEventListener("click", startTest);
restartBtn.addEventListener("click", startTest);

loadPassage();
