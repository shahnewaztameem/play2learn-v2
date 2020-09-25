var anagrams = [
  [
    "abets",
    "baste",
    "betas",
    "beast",
    "beats"
  ],
  [
    "acres",
    "cares",
    "races",
    "scare"
  ],
  [
    "alert",
    "alter",
    "later"
  ],
  [
    "angel",
    "angle",
    "glean"
  ],
  [
    "baker",
    "brake",
    "break"
  ],
  [
    "bared",
    "beard",
    "bread",
    "debar"
  ],
  [
    "dater",
    "rated",
    "trade",
    "tread"
  ],
  [
    "below",
    "bowel",
    "elbow"
  ],
  [
    "caret",
    "cater",
    "crate",
    "trace"
  ],
  [
    "arrest",
    "rarest",
    "raster",
    "raters",
    "starer"
  ],
  [
    "carets",
    "caters",
    "caster",
    "crates",
    "reacts",
    "recast",
    "traces"
  ],
  [
    "canter",
    "nectar",
    "recant",
    "trance"
  ],
  [
    "danger",
    "gander",
    "garden",
    "ranged"
  ],
  [
    "daters",
    "trades",
    "treads",
    "stared"
  ],
  [
    "allergy",
    "gallery",
    "largely",
    "regally"
  ],
  [
    "aspired",
    "despair",
    "diapers",
    "praised"
  ],
  [
    "claimed",
    "decimal",
    "declaim",
    "medical"
  ],
  [
    "dearths",
    "hardest",
    "hatreds",
    "threads",
    "trashed"
  ],
  [
    "detains",
    "instead",
    "sainted",
    "stained"
  ],
  [
    "parroted",
    "predator",
    "prorated",
    "teardrop"
  ],
  [
    "repaints",
    "painters",
    "pantries",
    "pertains"
  ],
  [
    "restrain",
    "retrains",
    "strainer",
    "terrains",
    "trainers"
  ],
  [
    "construe",
    "counters",
    "recounts",
    "trounces"
  ]
];


let gameDescription = document.getElementById('anagram-description');
let gameBox = document.getElementById('game-box');
let startBtn = document.getElementById('start-game');
let timer = document.getElementById('timer')
let gameInput = document.querySelector('textarea');
let randomWordPlaceholder = document.getElementById('random-word');
// game box will hide by default
gameBox.style.display = 'none'

startBtn.addEventListener('click', showGameBox);



//You should choose a random word of the correct length from the words in the words array found in this JavaScript file, which you should include as part of your website.


function showGameBox() {
  gameBox.style.display = 'block';
  gameDescription.style.display = 'none';

  let totalSeconds = 30;
  let timeStamp = setInterval(setTime, 1000);

  function setTime() {
    timer.innerHTML = `<strong>Time left</strong> ${totalSeconds} seconds`;

    if (totalSeconds === 0) {
      clearInterval(timeStamp);
    }
    --totalSeconds;
  }

  let dropdownWordLenght = document.getElementById('word-lenght');
  let selectedLength = dropdownWordLenght.options[dropdownWordLenght.selectedIndex].value;

  // console.log(selectedLength);


  let newFilteredArray = []
  for (let i = 0; i < anagrams.length; i++) {
    let anagram = anagrams[i];
    if (anagram[0].length === parseInt(selectedLength)) {
      newFilteredArray.push(anagram);

    }
  }

  randomWordPlaceholder.textContent = newFilteredArray[Math.floor(Math.random() * newFilteredArray.length)][0]
  console.log(newFilteredArray[Math.floor(Math.random() * newFilteredArray.length)][0])

}

