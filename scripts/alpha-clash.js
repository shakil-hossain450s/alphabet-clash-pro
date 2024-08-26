function handleKeyboardButtonPress(event) {
    const keyPressed = event.key;

    // key player is expected to press 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check right or wrong key pressed
    if (keyPressed === expectedAlphabet) {
        // update a score
        const currentScore = getElementTextValueById('current-score');
        const newScore = currentScore + 1;
        setElementTextValueById('current-score', newScore);

        // ----------------------------------------------------------
        // // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseFloat(currentScoreText);
        // // 2. increase the score by 1
        // const newScore = currentScore + 1;
        // // 3. show the updated score
        // currentScoreElement.innerText = newScore;
        // ----------------------------------------------------------

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
        const currentLife = getElementTextValueById('current-life');
        const newLife = currentLife - 1;
        setElementTextValueById('current-life', newLife);

        if(newLife === 0){
            gameOver();
        }

        // ----------------------------------------------------------
        // // step-1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseFloat(currentLifeText);

        // // step-2: reduce the life number
        // const newLife = currentLife - 1;

        // // step-3: display the remaining life
        // currentLifeElement.innerText = newLife;
        // ----------------------------------------------------------
    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();

    // set randomly generated alphabet to screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play() {
    // hide everything and show only the play ground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setElementTextValueById('current-life', 5);
    setElementTextValueById('current-score', 0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
}