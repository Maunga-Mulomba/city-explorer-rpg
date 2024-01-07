// resources

let energyText = document.querySelector("#energy-text");
let moneyText = document.querySelector("#money-text");
let xpText = document.querySelector("#xp-text");

// variables
let energy = 100;
let money = 250;
let xp = 20;

energyText.innerText = energy;
moneyText.innerText = money;
xpText.innerText = xp;

// locations
const parkBtn = document.querySelector("#park-btn");
const marketBtn = document.querySelector("#market-btn");
const casinoBtn = document.querySelector("#casino-btn");
const facilityBtn = document.querySelector("#facility-btn");

const choiceBtn = document.querySelector(".choices");

// the park
const parkChoice1Btn = document.querySelector(".park-choice-1");
const parkChoice2Btn = document.querySelector(".park-choice-2");
const parkChoice3Btn = document.querySelector(".park-choice-3");

const parkText = document.querySelector("#park-text");

// parkBtn.innerText = "park"
// marketBtn.innerText = "market"
// casinoBtn.innerText = "casino"
// facilityBtn.innerText = "facility"

parkBtn.onclick = visitPark;
// let parkChoices = [
//   { text: "Go for a jog", function: Jogging },
//   { text: "Join a yoga class", function: yogaClass },
//   { text: "Volunteer", function: volunteer },
// ];

let joggingSection = [
  { text: "Adopt him", function: adoptDog },
  { text: "Leave it alone", function: leaveDog },
  { text: "Find its owner", function: findOwner },
];

function visitPark() {
  choiceBtn.style.display = "block";
  parkText.style.display = "block";
  parkBtn.innerText = "Leave the park";
  parkText.innerText = "Welcome to Yosemite park.\n What do you want to do?";

  parkChoice1Btn.innerText = "Go for a jog";
  parkChoice2Btn.innerText = "Join a yoga class";
  parkChoice3Btn.innerText = "Volunteer";

  parkChoice1Btn.onclick = jogging;
  //   parkChoice2Btn.onclick = yogaClass;
  //   parkChoice3Btn.onclick = volunteer;
}

function jogging() {
  if (energy >= 10) {
    energy -= 10;
    energyText.innerText = energy;
  } else {
    parkText.innerText = "You do not have enough energy to go for a run";
  }

  parkText.innerText =
    "You decide to go for a run around the park.....\n\nYou see a stray dog on your run.\n What do you want to do?";

  parkChoice1Btn.innerText = "Adopt him";
  parkChoice2Btn.innerText = "Leave it alone";
  parkChoice3Btn.innerText = "Look for his owner";
}

function adoptDog() {
  xp += 20;
  xpText.innerText = xp;
  parkText.innerText = "Looks like you have a new friend";
}

function leaveDog() {
  xp -= 10;
  xpText.innerText = xp;
  parkText.innerText = "You leave the dog crying and all alone..\n";
}

function findOwner() {
  xp += 10;
  xpText.innerText = xp;
  parkText.innerText =
    "After 1 hour of looking you finally find the owner of the dog..\n Good job!";
}
