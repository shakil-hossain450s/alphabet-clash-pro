function handleKeyboardButtonPress(event){
    const keyPressed = event.key;

    // key player is expected to press 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check right or wrong key pressed
    if(keyPressed === expectedAlphabet){
        // update a score
        

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else{
        alert('you lost a life');
    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();

    // set randomly generated alphabet to screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}