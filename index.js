import DonutMaker from "./DonutMaker.js"


const numberOfDonutsEl = document.querySelector("#donutAmountMsg");
const numberOfAutoClickersEl = document.querySelector("#purchasedAutoClickers");
const costOfAutoClickersEl = document.querySelector("#costOfAutoClicker");

const donut = new DonutMaker(0, 0, 0);

const donutMakerBtn = document.querySelector("#donutMakerBtn");
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

setInterval(() => {
  donut.makeDonutsWithAutoClickers();
  numberOfDonutsEl.innerText = "You have " + donut.donuts + " donuts!!";
}, 1000);
