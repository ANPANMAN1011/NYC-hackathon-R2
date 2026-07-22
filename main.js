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
const Screen3 = document.querySelector(".screen3");
const Screen4 = document.querySelector(".screen4");
const Screen5 = document.querySelector(".screen5");
const Screen6 = document.querySelector(".screen6");
const Screen7 = document.querySelector(".screen7");

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
document.querySelectorAll(".next-btn")[1].addEventListener("click", function(){
    navigate(Screen2, Screen3);
});
document.querySelectorAll(".back-btn")[1].addEventListener("click", function(){
    navigate(Screen2, Screen1);
});
document.querySelectorAll(".next-btn")[2].addEventListener("click", function(){
    navigate(Screen3, Screen4);
});
document.querySelectorAll(".back-btn")[2].addEventListener("click", function(){
    navigate(Screen3, Screen2);
});
document.querySelectorAll(".next-btn")[3].addEventListener("click", function(){
    navigate(Screen4, Screen5);
});
document.querySelectorAll(".back-btn")[3].addEventListener("click", function(){
    navigate(Screen4, Screen3);
});
document.querySelectorAll(".next-btn")[4].addEventListener("click", function(){
    navigate(Screen5, Screen6);
});
document.querySelectorAll(".back-btn")[4].addEventListener("click", function(){
    navigate(Screen5, Screen4);
});
document.querySelectorAll(".next-btn")[5].addEventListener("click", function(){
    navigate(Screen6, Screen7);
});
document.querySelectorAll(".back-btn")[5].addEventListener("click", function(){
    navigate(Screen7, Screen6);
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

