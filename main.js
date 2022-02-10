
// Pick a colour button variable
const originalButton = document.getElementById('original-button')
// Mystery button variable
const mysteryButton = document.getElementById('mystery-button')

function randomNumber(num){
    return Math.floor(Math.random() * num)
}

function colourChange(event) {
    const randomColour = 'rgb(' + randomNumber(255) + ',' + randomNumber(255) + ',' + randomNumber(255) + ')'; 
    // Sets button colour to the random colour
    event.target.style.backgroundColor = randomColour;
    // Sets background colour to the random colour when one of the buttons are clicked
    document.body.style.background = randomColour;
}

function mysterycolourChange(event) {
    const randomColour = 'rgb(' + randomNumber(255) + ',' + randomNumber(255) + ',' + randomNumber(255) + ')'; 
    // Sets button colour to the random colour
    event.target.style.backgroundColor = randomColour;
    
    // Changes colour of all p tags (paragraph content)
    var ps = document.getElementsByTagName('p');
    for (var i = 0; i < ps.length; i++) {
        ps[i].style.color = randomColour;
    }

    // Changes title colour to the random colour
    var titletext = document.getElementsByTagName('h1');
    for (var i = 0; i < titletext.length; i++) {
        titletext[i].style.color = randomColour;
    }
}

originalButton.onclick = colourChange;
mysteryButton.onwheel = mysterycolourChange;





