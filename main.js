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