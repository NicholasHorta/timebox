const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const refreshBtn = document.querySelector("#refresh");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

let counter = 0;
let initMin = 0;
let timeStation;

startBtn.addEventListener("click", () => startTimer());
pauseBtn.addEventListener("click", () => pauseTimer());
refreshBtn.addEventListener("click", () => refreshTimer());

const alertAudio = new Audio('./alert.mp3')

const startTimer = () => {
  timer();
  startBtn.setAttribute("disabled", true);
  startBtn.textContent = "running...";
};

const pauseTimer = () => {
  clearInterval(timeStation);
  startBtn.removeAttribute("disabled");
  if(initMin >= 39){
    startBtn.textContent = "start";
  } else {
    startBtn.textContent = "continue";
  }
};

const timer = () => {
  timeStation = setInterval(() => {
    counter += 1;
    secondHandler();
    if (counter >= 59) {
      minuteHandler();
      counter = 0;
    }
  }, 1000);
};
function secondHandler() {
  if (sec && counter <= 9) {
    sec.textContent = `0${counter}`;
  } else if (sec) {
    sec.textContent = `${counter}`;
  }
}

function minuteHandler() {
  if (initMin >= 39) {
    alertAudio.play();
    clearInterval(timeStation);
    startBtn.textContent = 'complete'
    pauseBtn.textContent = '+1 min'
  }
  initMin += 1;
  if (min && initMin <= 9) {
    min.textContent = `0${initMin}`;
  } else if (min) {
    min.textContent = `${initMin}`;
  }
}

function refreshTimer(){
  window.location.reload();
}
