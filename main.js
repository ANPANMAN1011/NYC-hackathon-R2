// function for start button
const startButton = document.querySelector(".start-btn");

// implement code for switching screens
const startScreen = document.querySelector(".start-screen");
const Screen1 = document.querySelector(".screen1");

// transistion to first qurestion
function goToFirstQuestion(){
    // hide the start screen
    startScreen.classList.add("hidden");

    // show the Screen1 here
    Screen1.classList.remove("hidden");
}

// adding event listner to the strt button
if (startButton){
    startButton.addEventListener("click", goToFirstQuestion);
}

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