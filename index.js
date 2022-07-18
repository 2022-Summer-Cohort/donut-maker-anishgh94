import DonutMaker from "./DonutMaker.js"


const numberOfDonutsEl = document.querySelector("#donutAmountMsg");
const autoClicksPerSecondEl = document.querySelector("#autoClicksPerSecond");
const numberOfAutoClickersEl = document.querySelector("#numberOfAutoClickers")
const costOfAutoClickersEl = document.querySelector("#costOfAutoClicker");
const multiplierPerClickEl = document.querySelector("#multiplierPerClick");
const numberOfMultiplierEl = document.querySelector("#numberOfMultiplier")
const costOfMultiplierEl = document.querySelector("#costOfMultiplier");

const donut = new DonutMaker(0, 0, 0);

const totalDonutsPerSecondToShowEl = document.querySelector("#totalDonutsPerSecond");
totalDonutsPerSecondToShowEl.innerText = 0 + " per second";

const donutMakerBtn = document.querySelector("#donutImg");
donutMakerBtn.addEventListener("click", () => {
  donut.makeDonuts();
  numberOfDonutsEl.innerText = donut.donuts + " donuts";
  totalDonutsPerSecondToShowEl.innerText = donut.totalDonutsPerSecondToShow() + " per second";
})

const autoClickerBtn = document.querySelector("#autoClicker");
autoClickerBtn.addEventListener("click", () => {
  donut.buyAutoClicker();
  autoClicksPerSecondEl.innerText = "Per Second: " + donut.autoClickers + " donuts";
  numberOfAutoClickersEl.innerText = "X " + donut.autoClickers;
  costOfAutoClickersEl.innerText = "Next Clicker: " + donut.autoClickersCost;
  numberOfDonutsEl.innerText = donut.donuts + " donuts";
  totalDonutsPerSecondToShowEl.innerText = donut.totalDonutsPerSecondToShow() + " per second";
})

const multiplierBtn = document.querySelector("#multiplier");
multiplierBtn.addEventListener("click", () => {
  donut.buyMultiplier();
  multiplierPerClickEl.innerText = "Per Click: " + donut.donutsMultipliedPerClicks() + " donuts";
  numberOfMultiplierEl.innerText = "X " + donut.multiplier;
  costOfMultiplierEl.innerText = "Next Multiplier: " + donut.multiplierCost;
  numberOfDonutsEl.innerText = donut.donuts + " donuts";
  totalDonutsPerSecondToShowEl.innerText = donut.totalDonutsPerSecondToShow() + " per second";
})

setInterval(() => {
  donut.makeDonutsWithAutoClickers();
  numberOfDonutsEl.innerText = donut.donuts + " donuts";
}, 1000);

const resetEl = document.querySelector("#reset");
resetEl.addEventListener("click", () => {
  donut.resetAll();
  numberOfDonutsEl.innerText = donut.donuts + " donuts";
  totalDonutsPerSecondToShowEl.innerText = 0 + " per second";
  autoClicksPerSecondEl.innerText = "Per Second: " + donut.autoClickers + " donuts";
  numberOfAutoClickersEl.innerText = "X " + donut.autoClickers;
  costOfAutoClickersEl.innerText = "Next Clicker: " + donut.autoClickersCost;
  multiplierPerClickEl.innerText = "Per Click: " + donut.donutsMultipliedPerClicks() + " donuts";
  numberOfMultiplierEl.innerText = "X " + donut.multiplier;
  costOfMultiplierEl.innerText = "Next Multiplier: " + donut.multiplierCost;
})