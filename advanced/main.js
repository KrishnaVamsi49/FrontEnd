const hover = document.querySelector('.hover-effect');
const options = document.querySelectorAll('.option-user')

options.forEach(option => {
    option.addEventListener('mouseenter', () => {
        if (option.classList.contains('step2') == false && option.classList.contains('option-computer') == false) {
        option.firstElementChild.classList.toggle('active')
        } else {
            option.firstElementChild.classList.toggle('active')
        }
    })
})

options.forEach(option => {
    option.addEventListener('mouseout', () => {
        if (option.classList.contains('step2') == false && option.classList.contains('option-computer') == false) {
            option.firstElementChild.classList.toggle('active')
        } else {
            option.firstElementChild.classList.toggle('active')
        }
    })
})
let rulesOverlay = document.querySelector('.rules-overlay');
let btnRules = document.querySelector('.rules');
let btnClose = document.querySelector('.close-button-rules');
let darkOverlay = document.querySelector('.dark-overlay-rules');

btnRules.addEventListener('click', (e) => {
    e.preventDefault()

    darkOverlay.classList.toggle('active');
    rulesOverlay.classList.toggle('active');
});

btnClose.addEventListener('click', (e) => {
    e.preventDefault()

    darkOverlay.classList.toggle('active');
    rulesOverlay.classList.toggle('active');
});
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');
const triangle = document.getElementById('triangle');
const pickedText = document.getElementById('picked');
const computer = document.getElementById('computer');
const computerImage = document.getElementById('computerImage');
const overlayWinLoose = document.getElementById('results-overlay');
const youWinLoose = document.getElementById('you-win-loose');
const playAgainBtn = document.getElementById('play-again')
const circleWin = document.querySelector('.circle-win');
const circleChildWin = document.querySelector('.circle-win-child');
const circleChildChildWin = document.querySelector('.circle-win-child-child');
let score = document.getElementById('score');
var target = +score.getAttribute('data-target');
score.innerText = target;
let randomNumber = getRandomInt();
function getRandomInt() {
    return  Math.floor(Math.random() * Math.floor(3))
}

function animationShakeUser(option) {
    option.classList.add('animationShake');
    setTimeout(function() {
        option.classList.remove('animationShake')
        option.classList.add('animation-win-loose')
        computer.classList.add('animation-win-loose')
        pickedText.classList.add('animation-win-loose')
        overlayWinLoose.classList.add('animation-win-loose')
    }, 1500)
}

function displayCircleWin(userWin) {
    setTimeout(function() {
        if (userWin) {
            circleWin.classList.add('user-win');
            circleChildWin.classList.add('user-win');
            circleChildChildWin.classList.add('user-win');
        } else {
            circleWin.classList.add('computer-win');
            circleChildWin.classList.add('computer-win');
            circleChildChildWin.classList.add('computer-win');
        }
    }, 600)
}

function counter(e) {
    if (e) {
        target = target + 1;
        score.innerText = target;
    } else {
        target = target - 1;
        score.innerText = target;
    }
} 

function whoWins(option) {
    if (((randomNumber == 0 && option.classList.contains('option-paper')) 
    || (randomNumber == 1 && option.classList.contains('option-scissors')) 
    || (randomNumber == 2 && option.classList.contains('option-rock')))) {
        youWinLoose.innerHTML = 'TIE';
    }
    if (((randomNumber == 0 && option.classList.contains('option-scissors')) 
    || (randomNumber == 1 && option.classList.contains('option-rock')) 
    || (randomNumber == 2 && option.classList.contains('option-paper')))) {
        counter(true);
        youWinLoose.innerHTML = 'YOU WIN';
        displayCircleWin(true);
    }
    if (((randomNumber == 0 && option.classList.contains('option-rock')) 
    || (randomNumber == 1 && option.classList.contains('option-paper')) 
    || (randomNumber == 2 && option.classList.contains('option-scissors')))) {
        counter(false);
        youWinLoose.innerHTML = 'YOU LOSE';
        playAgainBtn.classList.add('red');
        displayCircleWin(false);
    }
}

const computerchoices = (option) => {
    setTimeout(function() {
        randomNumber = getRandomInt();
        if (randomNumber == 0) {
            computerImage.setAttribute('src','./images/icon-paper.svg');
            computer.classList.add('active');
            computer.classList.add('option-paper');
        }
        if (randomNumber == 1) {
            computerImage.setAttribute('src','./images/icon-scissors.svg');
            computer.classList.add('active');
            computer.classList.add('option-scissors');
        }
        if (randomNumber == 2) {
            computerImage.setAttribute('src','./images/icon-rock.svg');
            computer.classList.add('active');
            computer.classList.add('option-rock');
        }
        whoWins(option)
    }, 1100)
}


function animationStep2(option) {
    setTimeout(function() {
        option.classList.add('step2-animation')
        pickedText.classList.add('active')
    }, 1)
    computerchoices(option)
}

options.forEach(option => {
    option.addEventListener('click', () => {
        option.classList.add('step2');
        triangle.classList.add('step2-out');
        if (option.classList.contains('option-paper')) {
            scissors.classList.add('step2-out');
            rock.classList.add('step2-out');
        }
        if (option.classList.contains('option-scissors')) {
            paper.classList.add('step2-out');
            rock.classList.add('step2-out');
        }
        if (option.classList.contains('option-rock')) {
            paper.classList.add('step2-out');
            scissors.classList.add('step2-out');
        }
        const elementOut = document.querySelectorAll('.step2-out');
        animationStep2(option);
        animationShakeUser(option);
        playAgainBtn.addEventListener('click', () => {
            option.classList.remove('animation-win-loose')
            computer.classList.remove('animation-win-loose');
            pickedText.classList.remove('animation-win-loose');
            if((circleChildChildWin.classList.contains('user-win')) && 
            (circleChildWin.classList.contains('user-win')) && 
            (circleWin.classList.contains('user-win'))) {
                circleChildChildWin.classList.remove('user-win');
                circleChildWin.classList.remove('user-win');
                circleWin.classList.remove('user-win');
            }
            if((circleChildChildWin.classList.contains('computer-win')) && 
            (circleChildWin.classList.contains('computer-win')) && 
            (circleWin.classList.contains('computer-win'))) {
                circleChildChildWin.classList.remove('computer-win');
                circleChildWin.classList.remove('computer-win');
                circleWin.classList.remove('computer-win');
            }
            overlayWinLoose.classList.remove('animation-win-loose');
            setTimeout(function() {
                computer.classList.remove('active');
                computer.classList.remove('option-rock');
                computer.classList.remove('option-paper');
                computer.classList.remove('option-scissors');
                pickedText.classList.remove('active');
                triangle.classList.remove('step2-out');
                option.classList.remove('step2-animation');
                playAgainBtn.classList.remove('red')
            }, 300);
            setTimeout(function() {
                option.classList.remove('step2');
                elementOut.forEach(e => {
                    e.classList.remove('step2-out')
                })
            }, 600);
        })
    })
})