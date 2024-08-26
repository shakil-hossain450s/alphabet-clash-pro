function handleKeyboardButtonPress(event) {
    const keyPressed = event.key;

    if(event.key === "Escape"){
        gameOver();
    }

    // key player is expected to press 
    const currentAlphabet = getElementTextById('current-alphabet');
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check right or wrong key pressed
    if (keyPressed === expectedAlphabet) {
        // update a score
        const currentScore = getElementTextValueById('current-score');
        const newScore = currentScore + 1;
        setElementTextValueById('current-score', newScore);

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

    // set the last score
    const lastScore = getElementTextValueById('current-score');
    setElementTextValueById('last-score', lastScore);

    // clear the highlighted alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}