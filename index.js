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
totalDonutsPerSecondToShowEl.innerText = donut.totalDonutsPerSecondToShow() + " donuts generated per click";

const donutMakerBtn = document.querySelector("#donutImg");
donutMakerBtn.addEventListener("click", () => {
  donut.makeDonuts();
  numberOfDonutsEl.innerText = donut.donuts + " donuts";
  totalDonutsPerSecondToShowEl.innerText = donut.totalDonutsPerSecondToShow() + " donuts generated per click";
})

const autoClickerBtn = document.querySelector("#autoClickBtn");
autoClickerBtn.addEventListener("click", () => {
  donut.buyAutoClicker();
  autoClicksPerSecondEl.innerText = donut.autoClickers + " clicks per second";
  numberOfAutoClickersEl.innerText = "Number of Auto Clicker: " + donut.autoClickers;
  costOfAutoClickersEl.innerText = "Cost of next auto clicker: " + donut.autoClickersCost;
  numberOfDonutsEl.innerText = donut.donuts + " donuts";
  totalDonutsPerSecondToShowEl.innerText = donut.totalDonutsPerSecondToShow() + " donuts generated per click";
})

const multiplierBtn = document.querySelector("#multiplierBtn");
multiplierBtn.addEventListener("click", () => {
  donut.buyMultiplier();
  multiplierPerClickEl.innerText = donut.donutsMultipliedPerClicks() + " donuts per clicks";
  numberOfMultiplierEl.innerText = "Number of Multiplier: " + donut.multiplier;
  costOfMultiplierEl.innerText = "Cost of next multiplier: " + donut.multiplierCost;
  numberOfDonutsEl.innerText = donut.donuts + " donuts";
  totalDonutsPerSecondToShowEl.innerText = donut.totalDonutsPerSecondToShow() + " donuts generated per click";
})

setInterval(() => {
  donut.makeDonutsWithAutoClickers();
  numberOfDonutsEl.innerText = donut.donuts + " donuts";
}, 1000);

const resetEl = document.querySelector("#resetBtn");
resetEl.addEventListener("click", () => {
  donut.resetAll();
  numberOfDonutsEl.innerText = donut.donuts + " donuts";
  totalDonutsPerSecondToShowEl.innerText = donut.totalDonutsPerSecondToShow() + " donuts generated per click";
  autoClicksPerSecondEl.innerText = donut.autoClickers + " clicks per second";
  numberOfAutoClickersEl.innerText = "Number of Auto Clicker: " + donut.autoClickers;
  costOfAutoClickersEl.innerText = "Cost of next auto clicker: " + donut.autoClickersCost;
  multiplierPerClickEl.innerText = donut.donutsMultipliedPerClicks() + " donuts per clicks";
  numberOfMultiplierEl.innerText = "Number of Multiplier: " + donut.multiplier;
  costOfMultiplierEl.innerText = "Cost of next multiplier: " + donut.multiplierCost;
})