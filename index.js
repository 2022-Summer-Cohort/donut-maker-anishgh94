import DonutMaker from "./DonutMaker.js"


const numberOfDonutsEl = document.querySelector("#donutAmountMsg");
const numberOfAutoClickersEl = document.querySelector("#purchasedAutoClickers");
const costOfAutoClickersEl = document.querySelector("#costOfAutoClicker");
const purchasedMultiplierEl = document.querySelector("#purchasedMultiplier");
const costOfMultiplierEl = document.querySelector("#costOfMultiplier");

const donut = new DonutMaker(0, 0, 0);

const donutMakerBtn = document.querySelector("#donutImg");
donutMakerBtn.addEventListener("click", () => {
  donut.makeDonuts();
  numberOfDonutsEl.innerText = "You have " + donut.donuts + " donuts!!";
})

const autoClickerBtn = document.querySelector("#autoClickBtn");
autoClickerBtn.addEventListener("click", () => {
  donut.buyAutoClicker();
  numberOfAutoClickersEl.innerText = donut.autoClickers + " donuts per second";
  costOfAutoClickersEl.innerText = "Cost of auto clicker: " + donut.autoClickersCost;
  numberOfDonutsEl.innerText = "You have " + donut.donuts + " donuts!!";
})

const multiplierBtn = document.querySelector("#multiplierBtn");
multiplierBtn.addEventListener("click", () => {
  donut.buyMultiplier();
  purchasedMultiplierEl.innerText = donut.donutsPerClicks() + " donuts per clicks";
  costOfMultiplierEl.innerText = "Cost of next multiplier: " + donut.multiplierCost;
  numberOfDonutsEl.innerText = "You have " + donut.donuts + " donuts!!";

})

setInterval(() => {
  donut.makeDonutsWithAutoClickers();
  numberOfDonutsEl.innerText = "You have " + donut.donuts + " donuts!!";
}, 1000);
