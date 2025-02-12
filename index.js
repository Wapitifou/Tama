const LevelOfLife = document.getElementById("life");
const LevelOfThirst = document.getElementById("thirst");
const LevelOfHunger = document.getElementById("hunger");
const LevelOfLove = document.getElementById("love");
let thirst = 0;
let hunger = 0;
let love = "10❤️";
let life = ["🐹", "🐹", "🐹", "🐹", "🐹"];

LevelOfLife.innerText = `Life: ${life.join(" ")}`;
LevelOfThirst.innerText = `Thirst: ${thirst}`;
LevelOfHunger.innerText = `Hunger: ${hunger}`;
LevelOfLove.innerText = `Love: ${love}`;

function lifespan() {}
function feed() {}
function drink() {}
function pet() {}
