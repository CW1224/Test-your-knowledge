//Getting all the required items in the html file.
let heading = document.getElementById('main-heading');
let initialInformation = document.getElementById('provocation');
const startButton = document.getElementById('start-quiz');
const information = document.getElementById('information');
const exitButton = document.getElementById('exit-quiz');
const initiateButton = document.getElementById('begin-quiz');
const quiz = document.getElementById('quiz');

//This is the code that will bring the user to the quiz information page after pressing the start button.
startButton.onclick = function() {
    information.classList.add("activeInfo");
    heading.classList.add("main-heading-remove");
    initialInformation.classList.add("provocation-none");
}

//This is the code that would bring the user back to the initial page of the website.
exitButton.onclick = function() {
    information.classList.remove("activeInfo");
    heading.classList.remove("main-heading-remove");
    initialInformation.classList.remove("provocation-none");
}

//This is the code that would bring the user to the first question of the quiz when pressed.
initiateButton.onclick = function() {
    information.classList.remove("activeInfo"); //removes the information section
    quiz.classList.add('quiz-active');
}

//This is the code for the countdown timer. The timer counts down from 10 to 0 seconds with the milliseconds showing.

const startingSeconds = 10;
let time = startingSeconds * 100;

const countdownEl = document.getElementById('count-down');

setInterval(updateCountdown,10);

function updateCountdown() {

    const seconds = Math.floor(time/100);
    let milliseconds = time % 100;

    milliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds;

    countdownEl.innerHTML = `${seconds}: ${milliseconds}`;


    if (time > 0) {
        time--;
    }
    else {
    countdownEl.innerHTML = "Time Over";
    
    }
}