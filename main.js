// function for start button
const startButton = document.querySelector(".start-btn");
// go to screen2 
const nextButton = document.querySelector(".next-btn");
// go to previous screem
const backButton = document.querySelector(".back-btn");

// global variables
let providerString = "";
let chosenGenre = "";
let chosenRuntime = "";
let chosenSort = "popularity.desc";
let chosenRating = "0";
// implement code for switching screens
const startScreen = document.querySelector(".start-screen");
const Screen1 = document.querySelector(".screen1");
const Screen2 = document.querySelector(".screen2");
const Screen3 = document.querySelector(".screen3");
const Screen4 = document.querySelector(".screen4");
const Screen5 = document.querySelector(".screen5");
const Screen6 = document.querySelector(".screen6");

// creating a navigate function
function navigate(screenToHide, screenToShow) {
    screenToHide.classList.add("hidden");
    screenToShow.classList.remove("hidden");
}
// implement event lister backa nd next buttons
document.querySelector(".start-btn").addEventListener("click", function () {
    navigate(startScreen, Screen1);
});

document.querySelectorAll(".next-btn")[0].addEventListener("click", function () {

    let selectedPlatforms = [];
    // insert selected platforms into the array
    const avilablePlatforms = document.querySelectorAll('.screen1 input[type="checkbox"]:checked');
    //  grab id of the platforms
    avilablePlatforms.forEach(box => selectedPlatforms.push(box.value));
    providerString = selectedPlatforms.join('|');
    console.log("platform registered: ", providerString); // dont forget to verify this in console
    navigate(Screen1, Screen2);
});

document.querySelectorAll(".back-btn")[0].addEventListener("click", function () {
    navigate(Screen1, startScreen);
});
// adding an empty arry to store the useres avilable platforms 

document.querySelectorAll(".next-btn")[1].addEventListener("click", function () {
    let selected = [];
    const boxes = document.querySelectorAll('.screen2 input[type="checkbox"]:checked');
    boxes.forEach(box => selected.push(box.value));

    chosenGenre = selected.join(',');
    console.log("Genres selected: ", chosenGenre);
    // format for api
    navigate(Screen2, Screen3);
});
document.querySelectorAll(".back-btn")[1].addEventListener("click", function () {
    navigate(Screen2, Screen1);
});

document.querySelectorAll(".next-btn")[2].addEventListener("click", function () {
    const checkedRadio = document.querySelector('.screen3 input[type="radio"]:checked');
    if(checkedRadio){
        chosenRuntime = checkedRadio.value.trim(); // i almost forgot to use trim here c
        // trim cuts blank spaces
    }
    console.log("Runtime Registered: ", chosenRuntime)
    navigate(Screen3, Screen4);
});

document.querySelectorAll(".back-btn")[2].addEventListener("click", function () {
    navigate(Screen3, Screen2);
});

document.querySelectorAll(".next-btn")[3].addEventListener("click", function () {
    const checkedRadio = document.querySelector('.screen4 input[type="radio"]:checked');
    if(checkedRadio) {
        chosenSort = checkedRadio.value;
    }
    console.log("Preference Registered: ", chosenSort);
    navigate(Screen4, Screen5);
});

document.querySelectorAll(".back-btn")[3].addEventListener("click", function () {
    navigate(Screen4, Screen3);
});

document.querySelector(".screen5 .next-btn").addEventListener("click", function(){
    // 1. Grab the final rating answer
    const checkedRadio = document.querySelector('.screen5 input[type="radio"]:checked');
    if(checkedRadio) {
        chosenRating = checkedRadio.value;
    }
    console.log("Rating Registered: ", chosenRating);

    // 2. Switch to Screen 6 immediately so the user knows it's loading
    document.getElementById("movie-title").innerText = "Finding your movie...";
    document.getElementById("movie-overview").innerText = "";
    document.getElementById("movie-poster").style.display = "none"; 
    document.getElementById("movie-link").style.display = "none"; 
    navigate(Screen5, Screen6);

// implementing api search
const apiKey = "72beddc4f5a9f66bce2123865f581346";

let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&watch_region=IN&sort_by=${chosenSort}`

// adding aditional paramaters
if (providerString !== "") url += `&with_watch_providers=${providerString}`;
if (chosenGenre !== "") url += `&with_genres=${chosenGenre}`;
if (chosenRating !== "0") url += `&vote_average.gte=${chosenRating}`;
if (chosenRuntime !== "" && chosenRuntime !== "999") url += `&with_runtime.lte=${chosenRuntime}`;

console.log("API URL: ", url);
// fetching url
fetch(url)
    .then(response => response.json())
    .then(data => {
        //cheack if api actully found the movie
        if (!data.results || data.results.length === 0) {
            document.getElementById("movie-title").innerHTML = "No movies found! Try cahnging your answers.";
            return;
        }
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const randomMovie = data.results[randomIndex];

        document.getElementById("movie-title").innerText = randomMovie.title;
        document.getElementById("movie-overview").innerText = randomMovie.overview;

        const posterBaseUrl = "https://image.tmdb.org/t/p/w500";
        document.getElementById("movie-poster").src = posterBaseUrl + randomMovie.poster_path;
        document.getElementById("movie-poster").style.display="block";
        document.getElementById("movie-link").href = `https://www.themoviedb.org/movie/${randomMovie.id}`;
        document.getElementById("movie-link").style.display="inline-block";
    })
        .catch(error => {
        // internet down
        console.error("Error fetching movie: ", error);
        document.getElementById("movie-title").innerHTML = "Oops! we couldnt fing what you were looking for";
        });

});

document.querySelectorAll(".back-btn")[4].addEventListener("click", function () {
    navigate(Screen5, Screen4);
});

document.querySelectorAll(".back-btn")[5].addEventListener("click", function(){ navigate(Screen6, Screen5); });


document.querySelector(".start-over-btn").addEventListener("click", function(){
    window.location.reload(); // This perfectly resets the whole app
});
