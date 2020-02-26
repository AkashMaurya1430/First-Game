/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var currentscore = 0, winningscore = 30, currentplayer, counter;
Boolean(currentplayer);
newgame();

function newgame() {
    document.getElementById("score-0").innerHTML = 0;
    document.getElementById("score-1").innerHTML = 0;
    document.getElementById("current-0").innerHTML = 0;
    document.getElementById("current-1").innerHTML = 0;
    //document.querySelector('player-1-panel').classList.add('active');
    //document.querySelector('player-0-panel').classList.remove('active');
    let dice = document.getElementById("imgClickAndChange");
    dice.src = "dice-1.png";
    currentplayer = true;
}


function changeplayer() {
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('current-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    currentplayer = !currentplayer;
    currentscore = 0;
}


function changeImage() {
    var x = Math.floor((Math.random() * 6) + 1);
    let dice = document.getElementById("imgClickAndChange");
    dice.src = "dice-" + x + ".png";
    if (currentplayer) {
        player1(x);
    }
    else
        player2(x);
}


function hold() {
    if (currentplayer)
        document.getElementById('score-0').innerHTML = +document.getElementById('score-0').innerHTML + currentscore;
    else
        document.getElementById('score-1').innerHTML = +document.getElementById('score-1').innerHTML + currentscore;
    changeplayer();
    winner();
}


function player1(x) {
    if (x != 1) {
        currentscore = +currentscore + +x;
        document.getElementById('current-0').textContent = currentscore;
    }
    else {
        changeplayer();
    }
}


function player2(x) {
    if (x != 1) {
        currentscore = +currentscore + +x;
        document.getElementById('current-1').textContent = currentscore;
    }
    else {
        changeplayer();
    }
}


function winner() {
    if (+document.getElementById('score-0').innerHTML > winningscore) {
        alert("Winner is Player1");
        newgame();
    }
    else if (+document.getElementById('score-1').innerHTML > winningscore) {
        alert("winner is player2");
        newgame();
    }
    else
        return;
}
