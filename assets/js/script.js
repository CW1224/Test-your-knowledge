//Getting all the required items in the html file.
let heading = document.getElementById('main-heading');
let initialInformation = document.getElementById('provocation');
const startButton = document.getElementById('start-quiz');
const information = document.getElementById('information');
const exitButton = document.getElementById('exit-quiz');
const initiateButton = document.getElementById('begin-quiz');
const quiz = document.getElementById('quiz');
let choices = document.getElementById('option-list');
const option = document.getElementsByClassName('option')

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
    showQuestions(0);
}

//Adding in the code to give question and answer options.

let queCount = 0;
let quesNumber = 1;
let rightAnswer = 0;
let nextButton = document.getElementById('next-que');

//When the next button on the quiz is clicked, the following question should appear.

nextButton.onclick = function() {
    if (queCount < questions.length - 1 ){
        //Increasing the number on the footer of the quiz page as the next question button is pressed.
        quesNumber++;
        let quesNum = document.getElementById('total-question');
        let quesText = '<span><p>' + quesNumber + ' Of 5' + '</p></span>';
        quesNum.innerHTML = quesText;

        queCount++;
        showQuestions(queCount);
    } else {
        console.log('Quiz complete');
    }
}

function showQuestions(index) {
    let queTitle = document.getElementById('question');
    let queTag = '<span>' + questions[index].number + '. ' + questions[index].question + '</span>';
    let optionList = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
                + '<div class="option"><span>' + questions[index].options[1] + '</span></div>' 
                + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
                + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    queTitle.innerHTML = queTag;
    choices.innerHTML = optionList;

    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick','optionSelected(this)');
    }
}

//This is the code to let user check if they got the correct answer or not. This block of code is taken from a youtube video. I made some modification to it so that it can be used in my quiz.

function optionSelected(correctAns) {
    let userAns = correctAns.textContent;
    let correctAnswer = questions[queCount].correctAns;
    let allOptions = option.length;
    if (userAns == correctAnswer) {
        rightAnswer++;
        correctAns.classList.add ('tick');
        console.log("Well done")
        console.log(rightAnswer);
    } else {
        correctAns.classList.add ('cross');
       console.log("Too bad")
    }

    //This is the code that will prevent the user from picking any other question once once answer is picked.

    for (let i = 0; i < allOptions; i++) {
        option[i].classList.add('disabled');
    }
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