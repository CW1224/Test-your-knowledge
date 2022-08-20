//Getting all the required items in the html file.
let heading = getElementById('main-heading');
let initialInformation = getElementById('provocation');
const startButton = getElementById('start-quiz');
const information = getElementById('information');

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