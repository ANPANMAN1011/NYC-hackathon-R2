// function for start button
const startButton = document.querySelector(".start-btn");
// go to screen2 
const nextButton = document.querySelector(".next-btn");
// go to previous screem
const backButton = document.querySelector(".back-btn");

// implement code for switching screens
const startScreen = document.querySelector(".start-screen");
const Screen1 = document.querySelector(".screen1");
const Screen2 = document.querySelector(".screen2");


// creating a navigate function
function navigate(screenToHide, screenToShow) {
    screenToHide.classList.add("hidden");
    screenToShow.classList.remove("hidden");
}
// implement event lister backa nd next buttons
document.querySelector(".start-btn").addEventListener("click", function(){
    navigate(startScreen, Screen1);
});
document.querySelectorAll(".next-btn")[0].addEventListener("click", function(){
    navigate(Screen1, Screen2);
});
document.querySelectorAll(".back-btn")[0].addEventListener("click", function(){
    navigate(Screen1, startScreen);
});
// adding an empty arry to store the useres avilable platforms 
let selectedPlatforms = [];
// insert selected platforms into the array
const avilablePlatforms = document.querySelectorAll('.platform-box:checked');
//  grab id of the platforms
// Netflix: 8
// Disney+: 337
// Max (formerly HBO Max): 1899
// Amazon Video: 10
// Apple TV / iTunes: 2
avilablePlatforms.forEach(function(box){
    selectedPlatforms.push(box.value);
});
// format for api
let providerString = selectedPlatforms.join('|');


// implementing api search
const apiKey = "72beddc4f5a9f66bce2123865f581346";

const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_watch_providers=${providerString}&watch_region=IN&with_genres=${chosenGenre}`

document.querySelectorAll(".next-btn")[1].addEventListener("click", function(){
    navigate(Screen2, Screen2);
});
document.querySelectorAll(".back-btn")[1].addEventListener("click", function(){
    navigate(Screen2, Screen1);
});