const LevelOfLife = document.getElementById("life");
const LevelOfThirst = document.getElementById("thirst");
const LevelOfHunger = document.getElementById("hunger");
const LevelOfLove = document.getElementById("love");
const water = document.getElementById("water");
const pretzel = document.getElementById("pretzel");
const hug = document.getElementById("hug");
let thirst = 0;
let hunger = 0;
let love = 10;
let life = ["🐹", "🐹", "🐹", "🐹", "🐹"];

LevelOfLife.innerText = `Life: ${life.join(" ")}`;
LevelOfThirst.innerText = `Thirst: ${thirst}`;
LevelOfHunger.innerText = `Hunger: ${hunger}`;
LevelOfLove.innerText = `Love: ${love}❤️`;

function majAffichage() {
  LevelOfLife.innerText = `Life: ${life.join(" ")}`;
  LevelOfThirst.innerText = `Thirst: ${thirst}`;
  LevelOfHunger.innerText = `Hunger: ${hunger}`;
  LevelOfLove.innerText = `Love: ${love}❤️`;
}

function needs() {
  setInterval(() => {
    hunger++;
    thirst++;
    love--;
    majAffichage();
  }, 3000);
}

function lifespan() {
  setInterval(() => {
    if (hunger >= 5 || thirst >= 5 || love <= 5) {
      life.pop();
    }
    majAffichage();
  }, 3000);
}
function drink() {
  water.addEventListener("click", (e) => {
    thirst--;
    majAffichage();
  });
}
function feed() {
  pretzel.addEventListener("click", (e) => {
    hunger--;
    majAffichage();
  });
}
function pet() {
  hug.addEventListener("click", (e) => {
    love++;
    majAffichage();
  });
}

drink();
needs();
feed();
pet();
lifespan();
