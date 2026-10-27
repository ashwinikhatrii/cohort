const timer = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const lapList = document.getElementById("lapList");

let startTime = 0;
let elapsedTime = 0;
let interval = null;
let lapCount = 0;

function formatTime(ms) {
  const totalCentiseconds = Math.floor(ms / 10);

  const minutes = Math.floor(totalCentiseconds / 6000);
  const seconds = Math.floor(totalCentiseconds / 100) % 60;
  const centiseconds = totalCentiseconds % 100;

  return (
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0") +
    ":" +
    String(centiseconds).padStart(2, "0")
  );
}

function updateTimer() {
  elapsedTime = performance.now() - startTime;
  timer.textContent = formatTime(elapsedTime);
}

startBtn.addEventListener("click", () => {
  if (interval !== null) return;

  startTime = performance.now() - elapsedTime;

  updateTimer();
  interval = setInterval(updateTimer, 10);
});

pauseBtn.addEventListener("click", () => {
  if (interval === null) return;

  clearInterval(interval);
  interval = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;

  elapsedTime = 0;
  startTime = 0;
  lapCount = 0;

  timer.textContent = "00:00:00";
  lapList.innerHTML = "";
});

lapBtn.addEventListener("click", () => {
  if (interval === null) return;

  lapCount++;

  const li = document.createElement("li");

  const lapName = document.createElement("span");
  lapName.textContent = `Lap ${lapCount}`;

  const lapTime = document.createElement("span");
  lapTime.textContent = formatTime(elapsedTime);

  li.append(lapName, lapTime);
  lapList.prepend(li);
});
