// query selector variables go here 👇

//display data
var posterImg = document.querySelector(".poster-img");
var posterTitle = document.querySelector(".poster-title");
var posterQuote = document.querySelector(".poster-quote");
var savedPostersPage = document.querySelector(".saved-posters");
var savedPostersGrid = document.querySelector(".saved-posters-grid");

//input data
var posterImageUrlInput = document.querySelector("#poster-image-url") ;
var posterTitleInput = document.querySelector("#poster-title");
var posterQuoteInput = document.querySelector("#poster-quote");

//controls
var showRandomBtn = document.querySelector(".show-random");
var makePosterBtn = document.querySelector(".show-form");
var savePosterBtn = document.querySelector(".make-poster");
var showSaveBtn = document.querySelector(".show-saved");
var backToMainBtn = document.querySelector(".back-to-main");
var showMainBtn = document.querySelector(".show-main");
var saveMainPosterBtn = document.querySelector(".save-poster");




//Views
var mainPosterView = document.querySelector(".main-poster");
var posterFormView = document.querySelector(".poster-form");
var savedPosterView = document.querySelector(".saved-posters");
// var formInput = document.querySelector(".poster-form");



// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;
var currentImage;
var currentTitle;
var currentQuote;
// event listeners go here 👇
window.addEventListener("load", generateRandomPoster);
showRandomBtn.addEventListener("click", generateNewRandomPoster);
makePosterBtn.addEventListener("click", showMakePosterForm);
savePosterBtn.addEventListener("click", saveMYOPoster);
showSaveBtn.addEventListener("click", showSaved);
backToMainBtn.addEventListener("click", showMainPage);
showMainBtn.addEventListener("click", showMainPage);
saveMainPosterBtn.addEventListener("click", saveMainPoster);





// functions and event handlers go here 👇
function hi() {
console.log('hi');
};


function generateRandomPoster() {
  currentPoster = new Poster(images[getRandomIndex(images)], titles[getRandomIndex(titles)], quotes[getRandomIndex(quotes)]);
  console.log({currentPoster});
  showRandom();
};

function resetForm() {
  createOwnTitle.value = "";
  createOwnQuote.value = "";
  createOwnUrl.value = "";
};


function showRandom() {
  posterTitle.innerText = currentPoster.title;
  posterQuote.innerText = currentPoster.quote;
  posterImg.src = currentPoster.imageURL;
};

function generateNewRandomPoster(){
  generateRandomPoster();
};

function showMakePosterForm(){
  hide(mainPosterView);
  show(posterFormView);
};


function showSaved(){
  hide(mainPosterView);
  hide(posterFormView);
  show(savedPosterView);
};

function showMainPage(){
  show(mainPosterView);
  hide(posterFormView);
  hide(savedPosterView);
};

function handleInput(){
  posterImageUrlInput
  posterTitleInput
  posterQuoteInput
}

function saveMYOPoster(e){
  e.preventDefault();

  saveMyPoster();
  showSaved();
  resetForm();

};

function saveMainPoster(e){
  e.preventDefault();

  saveMyPoster();

}

function saveMyPoster(){
  //if currentPoster, push data object into new array
  //new array needs to be shown on the saved poster page
  return  !savedPosters.includes(currentPoster) ?  savedPosters.push(currentPoster) : console.log({savedPosters})
};

function displayMYOPoster(){
  currentPoster.imageURL = createOwnUrl.value;
  currentPoster.title = createOwnTitle.value;
  currentPoster.quote = createOwnQuote.value;

  posterTitle.innerText = createOwnTitle.value;
  posterQuote.innerText = createOwnQuote.value;
  posterImage.src = createOwnUrl.value;
  event.preventDefault();

  titles.push(createOwnTitle.value);
  quotes.push(createOwnQuote.value);
  images.push(createOwnUrl.value);

  showMainPage();
  resetForm();
}

function displaySavedPosters(){
  for (var i = 0; i < savedPosters.length; i++) {
    savedPostersGrid.innerHTML +=
    `<article class="mini-poster">
      <img src="${savedPosters[i].imageURL}" alt="nothin' to see here">
      <h2>${savedPosters[i].title}</h1>
      <h4>${savedPosters[i].quote}</h3>
    </article>`;
  }
}

// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function hide(element) {
  element.classList.add('hidden');
};

function show(element) {
  element.classList.remove('hidden');
};

function showResetButton(){
  let resetBtn = document.createElement("resetButton");	// Create a new element
  resetBtn.innerText = 'Reset';		// Change the text of the element
  resetBtn.style.color = 'red';		// Change the text color of the element
  document.body.appendChild(posterFormView);
}