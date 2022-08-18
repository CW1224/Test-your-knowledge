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