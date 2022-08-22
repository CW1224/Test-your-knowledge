//Getting all the required items in the html file.
let heading = document.getElementById('main-heading');
let initialInformation = document.getElementById('provocation');
const startButton = document.getElementById('start-quiz');
const information = document.getElementById('information');
const exitButton = document.getElementById('exit-quiz');
const initiateButton = document.getElementById('begin-quiz');
const quiz = document.getElementById('quiz');
let quesNum = document.getElementById('total-question');
let nextButton = document.getElementById('next-que');
let choices = document.getElementById('option-list');
const option = document.getElementsByClassName('option')
const countdownEl = document.getElementById('count-down');
const results = document.getElementById('results');
let finalMessage = document.getElementById('final-message');
let finalResults = document.getElementById('score');
const restartButton = document.getElementById('restart-quiz');
const leaveButton = document.getElementById('quit-quiz');

//Adding in the code to give question and answer options.

let queCount = 0;
let quesNumber = 1;
let quesText;
let rightAnswer = 0;
let counter;
let timeValue = 10;

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
    quiz.classList.add('activeQuiz');
    showQuestions(0);
    updateCountdown(9);
    quesText = '<span><p>' + quesNumber + ' Of 5' + '</p></span>';
    quesNum.innerHTML = quesText;
}

//When the next button on the quiz is clicked, the following question should appear.

nextButton.onclick = function() {
    if (queCount < questions.length - 1 ){
        //Increasing the number on the footer of the quiz page as the next question button is pressed.
        quesNumber++;
        quesText = '<span><p>' + quesNumber + ' Of 5' + '</p></span>';
        quesNum.innerHTML = quesText;
        //Renewing the countdown timer, everytime it is pressed.
        clearInterval(counter);
        updateCountdown(timeValue);
        nextButton.style.display = 'none';

        queCount++;
        showQuestions(queCount);
    } else {
        console.log('Quiz complete');
        showResults();
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

let checkIcon = '<div class="icon-tick"><i class="fa-solid fa-circle-check"></i></div>';
let crossIcon = '<div class="icon-cross"><i class="fa-solid fa-circle-xmark"></i></div>';

let allOptions = option.length;

function optionSelected(correctAns) {
    let userAns = correctAns.textContent;
    let correctAnswer = questions[queCount].correctAns;
    if (userAns == correctAnswer) {
        rightAnswer++;
        correctAns.classList.add ('tick');
        correctAns.insertAdjacentHTML("beforeend", checkIcon);
        console.log("Well done")
        console.log(rightAnswer);
    } else {
        correctAns.classList.add ('cross');
        correctAns.insertAdjacentHTML("beforeend", crossIcon);
        console.log("Too bad")
    }

    //This is the code that will prevent the user from picking any other question once an answer is picked.

    for (let i = 0; i < allOptions; i++) {
        option[i].classList.add('disabled');
        clearInterval(counter);
        nextButton.style.display = 'block';
    }
}

//This is the code for the countdown timer. The timer counts down from 10 to 0 seconds with the milliseconds showing.
//The milliseconds takes the user's attention away from the quiz itself so it would be removed. This was based on a youtube channel.

function updateCountdown(time) {

    counter = setInterval(timer,1000);
    function timer() {
        countdownEl.textContent = time;
        time--;
        if (time < 0) {
            clearInterval(counter);
            countdownEl.textContent = "00";
            //Once the timer runs out, the user would no longer be able to pick an answer.
            for (let i = 0; i < allOptions; i++) {
                option[i].classList.add('disabled');
                nextButton.style.display = 'block';
            }
        } else if (time < 9) {
            let addZero = countdownEl.textContent;
            countdownEl.textContent = '0' + addZero;
        }

    }
}

//The results section

function showResults() {
    quiz.classList.remove('activeQuiz');
    results.classList.add('activeResults');

    if (0 < rightAnswer < 3) {
        finalMessage.innerHTML = 'Excellent! Your knowledge of the world is incomparable.';
    } else if (0 < rightAnswer < 3) {
        finalMessage.innerHTML = "Amazing! You're nearly there. ";
    } else if (0 < rightAnswer < 3) {
        finalMessage.innerHTML = 'Really Good! However, you could do with a little more studying.';
    } else if (0 < rightAnswer < 3) {
        finalMessage.innerHTML = "Mediocre! Widen up you're ";
    } else {
        finalMessage.innerHTML = 'Uhm... You should take a look at the world outside.';
    }

    let endResults ='<span>' + "You're score is" + '<p>' + rightAnswer +'</p>' + 'out of' + '<p>20</p></span>'; 
    finalResults.innerHTML = endResults;
}

//This is the code that would allow the user to go back to the main page upon clicking.

leaveButton.onclick = function() {
    results.classList.remove('activeResults');
    heading.classList.remove("main-heading-remove");
    initialInformation.classList.remove("provocation-none");
    queCount = 0;
    quesNumber = 1;
}

//This is the code that would allow the user to redo the quiz upon clicking.

restartButton.onclick = function() {
    results.classList.remove('activeResults');
    information.classList.add("activeInfo");
    queCount = 0;
    quesNumber = 1;
}