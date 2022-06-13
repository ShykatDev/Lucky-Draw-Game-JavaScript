const drawBtn = document.querySelector(".draw");
const dc1 = document.querySelector(".d1");
const dc2 = document.querySelector(".d2");
const dc3 = document.querySelector(".d3");

const diceNumber1 = document.querySelector(".dice-num1");
const diceNumber2 = document.querySelector(".dice-num2");
const diceNumber3 = document.querySelector(".dice-num3");

const highScore = document.querySelector(".highScore");

const reward = document.querySelector(".reward--item");
const rewardCont = document.querySelector(".reward");
const instBtn = document.querySelector(".inst");
const againBtn = document.querySelector(".again");
const overlay = document.querySelector(".overlay");
const ins = document.querySelector(".ins");
const cross = document.querySelector(".cross");

let rolling = true;
let score = 0;

const pname = prompt("Please insert your name! 👇");

reward.textContent = `Welcome: ${pname.toUpperCase()}`;

const addHidden = function () {
  overlay.classList.add("hidden");
  ins.classList.add("hidden");
};

var roll = new Audio("./roll.mp3");

drawBtn.addEventListener("click", () => {
  if (rolling) {
    roll.play();
    let dice1 = Math.trunc(Math.random() * 6) + 1;
    let dice2 = Math.trunc(Math.random() * 6) + 1;
    let dice3 = Math.trunc(Math.random() * 6) + 1;
    score++;

    document.querySelector(".dices").classList.remove("hidden");

    dc1.src = `./dice-${dice1}.png`;
    dc2.src = `./dice-${dice2}.png`;
    dc3.src = `./dice-${dice3}.png`;

    diceNumber1.textContent = dice1;
    diceNumber2.textContent = dice2;
    diceNumber3.textContent = dice3;

    if (dice1 === dice2 && dice1 === dice3 && dice2 === dice3) {
      reward.textContent = "All Same!🚩 You are lucky, hmmmm. 🍁";
      reward.classList.add("ani");
      highScore.textContent = score;
      rolling = false;
    } else if (dice1 === dice2) {
      reward.textContent = "🍁 Almost! Your 1st & 2nd dice are matched 🍁";
    } else if (dice1 === dice3) {
      reward.textContent = "🍁 Almost! Your 1st & 3rd dice are matched 🍁";
    } else if (dice2 === dice3) {
      reward.textContent = "🍁 Almost! Your 2nd & 3rd dice are matched 🍁";
    } else {
      reward.textContent = "Keep Rolling 🎲";
    }
  }
});

instBtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  ins.classList.remove("hidden");
});

cross.addEventListener("click", addHidden);

overlay.addEventListener("click", addHidden);

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHidden();
  }
});

againBtn.addEventListener("click", () => {
  rolling = true;
  score = 0;
  diceNumber1.textContent = 1;
  diceNumber2.textContent = 1;
  diceNumber3.textContent = 1;

  reward.classList.remove("ani");
  document.querySelector(".dices").classList.add("hidden");
  reward.textContent = `Welcome ${pname.toUpperCase()}`;

  dc1.src = `./dice-1.png`;
  dc2.src = `./dice-1.png`;
  dc3.src = `./dice-1.png`;
});
