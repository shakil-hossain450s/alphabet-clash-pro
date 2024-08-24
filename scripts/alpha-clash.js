function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet is: ', alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}