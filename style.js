var player1Name, player2Name;
var p1Input, p2Input;
var box = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var activePlayer;
var cross = '<img src="images/cross.svg" alt="cross" class="cross">';
var circle = '<img src="images/circle.svg" alt="circle" class="circle">';
var ISCLICKED = [0, 0, 0, 0, 0, 0, 0, 0, 0];

p1Input = document.querySelector("#player-1-name");
p2Input = document.querySelector("#player-2-name");

//click on start button
document.getElementById("start-btn").addEventListener("click", function () {
    document.getElementById("start-btn").style.display = "none";
    document.querySelector(".form").style.display = "block";
});

//click on play button
document.querySelector(".play").addEventListener("click", function () {

    //checking values of input field ans assign to variable
    if (p1Input.value === '') {
        player1Name = "Player - 1";
    } else {
        player1Name = p1Input.value;
    }
    if (p2Input.value === '') {
        player2Name = "Player - 2";
    } else {
        player2Name = p2Input.value;
    }

    //ui
    document.querySelector(".form").style.display = "none";
    document.querySelector(".player").style.display = "flex";
    //display player name
    document.querySelector("#player-1").innerHTML = player1Name;
    document.querySelector("#player-2").innerHTML = player2Name;

    //display tictactoe container
    document.querySelector(".container").style.display = "grid";
    //play tictactoe
    tictactoe();
});

//initialize each box with value 2
box.fill(null, 0);
ISCLICKED.fill(1, 0); //false
//initialize activePlayer to 0 (player 1 = 0;  player 2 = 1)
activePlayer = 0;
// console.log("initialize activePlayer" + activePlayer);

function tictactoe() {
    // //initialize each box with value 2
    // box.fill(2, 0);
    // //initialize activePlayer to 0 (player 1 = 0;  player 2 = 1)
    // activePlayer = 0;

    //define what happen when click in the box
    boxes(activePlayer);

    /************************************/
    /*                                  */
    /************************************/
}

function boxes(activePlayer) {
    //initializing active player ui
    //ui active player
    uiActivePlayer(activePlayer);
    document.querySelector(".box-1").addEventListener("click", function () {

        if (ISCLICKED[0] === 1) {
            if (activePlayer === 0) {
                //insert image inside box
                document.querySelector(".box-1").insertAdjacentHTML('afterbegin', cross);
                //change active player status
                activePlayer = 1;
                //remove active player flash class
                document.querySelector("#p-1-s-1").classList.remove("flash");
                //ui active player
                uiActivePlayer(activePlayer);
                //change box value
                box[0] = 0;
                //check if player 1 win the match
                isWinOrDraw();
                
            } else {
                //insert image inside box
                document.querySelector(".box-1").insertAdjacentHTML('afterbegin', circle);
                //change active player status
                activePlayer = 0;
                //remove active player flash class
                document.querySelector("#p-2-s-1").classList.remove("flash");
                //ui active player
                uiActivePlayer(activePlayer);
                //change box value
                box[0] = 1;
                //check if player 1 win the match
                isWinOrDraw();
                
            }
        }

        ISCLICKED[0] = 0;
    });

    document.querySelector(".box-2").addEventListener("click", function () {
        if (ISCLICKED[1] === 1) {
            if (activePlayer === 0) {
                //insert image inside box
                document.querySelector(".box-2").insertAdjacentHTML('afterbegin', cross);
                //change active player status
                activePlayer = 1;
                //remove active player flash class
                document.querySelector("#p-1-s-1").classList.remove("flash");
                //change active player ui
                uiActivePlayer(activePlayer);
                //change box value
                box[1] = 0;
                //check if player 1 win the match
                isWinOrDraw();

            } else {
                //insert image inside box
                document.querySelector(".box-2").insertAdjacentHTML('afterbegin', circle);
                //change active player status
                activePlayer = 0;
                //remove active player flash class
                document.querySelector("#p-2-s-1").classList.remove("flash");
                //change active player ui
                uiActivePlayer(activePlayer);
                //change box value
                box[1] = 1;
                //check if player 1 win the match
                isWinOrDraw();
            }
        }

        ISCLICKED[1] = 0; //true
    });

    document.querySelector(".box-3").addEventListener("click", function () {
        if (ISCLICKED[2] === 1) {
            if (activePlayer === 0) {
                //insert image inside box
                document.querySelector(".box-3").insertAdjacentHTML('afterbegin', cross);
                //change active player status
                activePlayer = 1;
                //remove active player flash class
                document.querySelector("#p-1-s-1").classList.remove("flash");
                //change active player ui
                uiActivePlayer(activePlayer);
                //change box value
                box[2] = 0;
                //check if player 1 win the match
                isWinOrDraw();
            } else {
                //insert image inside box
                document.querySelector(".box-3").insertAdjacentHTML('afterbegin', circle);
                //change active player status
                activePlayer = 0;
                //remove active player flash class
                document.querySelector("#p-2-s-1").classList.remove("flash");
                //change active player ui
                uiActivePlayer(activePlayer);
                //change box value
                box[2] = 1;
                //check if player 1 win the match
                isWinOrDraw();
            }
        }
        ISCLICKED[2] = 0;
    });
    document.querySelector(".box-4").addEventListener("click", function () {
        if (ISCLICKED[3] === 1) {
            if (activePlayer === 0) {
                //insert image inside box
                document.querySelector(".box-4").insertAdjacentHTML('afterbegin', cross);
                //change active player status
                activePlayer = 1;
                //remove active player flash class
                document.querySelector("#p-1-s-1").classList.remove("flash");
                //change active player ui
                uiActivePlayer(activePlayer);
                //change box value
                box[3] = 0;
                //check if player 1 win the match
                isWinOrDraw();
            } else {
                //insert image inside box
                document.querySelector(".box-4").insertAdjacentHTML('afterbegin', circle);
                //change active player status
                activePlayer = 0;
                //remove active player flash class
                document.querySelector("#p-2-s-1").classList.remove("flash");
                //change active player ui
                uiActivePlayer(activePlayer);
                //change box value
                box[3] = 1;
                //check if player 1 win the match
                isWinOrDraw();
            }
        }

        ISCLICKED[3] = 0;
    });
    document.querySelector(".box-5").addEventListener("click", function () {
        if (ISCLICKED[4] === 1) {
            if (activePlayer === 0) {
                //insert image inside box
                document.querySelector(".box-5").insertAdjacentHTML('afterbegin', cross);
                //change active player status
                activePlayer = 1;
                //remove active player flash class
                document.querySelector("#p-1-s-1").classList.remove("flash");
                //change active player ui
                uiActivePlayer(activePlayer);
                //change box value
                box[4] = 0;

                //check if player 1 win the match
                isWinOrDraw();

            } else {
                //insert image inside box
                document.querySelector(".box-5").insertAdjacentHTML('afterbegin', circle);
                //change active player status
                activePlayer = 0;
                //remove active player flash class
                document.querySelector("#p-2-s-1").classList.remove("flash");
                //change active player ui
                uiActivePlayer(activePlayer);
                //change box value
                box[4] = 1;

                //check if player win the match
                isWinOrDraw();
            }
        }
        ISCLICKED[4] = 0;
    });
    document.querySelector(".box-6").addEventListener("click", function () {
        if (ISCLICKED[5] === 1) {
            if (activePlayer === 0) {
                //insert image inside box
                document.querySelector(".box-6").insertAdjacentHTML('afterbegin', cross);
                //change active player status
                activePlayer = 1;
                //remove active player flash class
                document.querySelector("#p-1-s-1").classList.remove("flash");
                //change active player ui
                uiActivePlayer(activePlayer);
                //change box value
                box[5] = 0;

                //check if player 1 win the match
                isWinOrDraw();

            } else {
                //insert image inside box
                document.querySelector(".box-6").insertAdjacentHTML('afterbegin', circle);
                //change active player status
                activePlayer = 0;
                //remove active player flash class
                document.querySelector("#p-2-s-1").classList.remove("flash");
                //change active player ui
                uiActivePlayer(activePlayer);
                //change box value
                box[5] = 1;


                //check if player 1 win the match
                isWinOrDraw();
            }
        }
        ISCLICKED[5] = 0;
    });

    document.querySelector(".box-7").addEventListener("click", function () {
        if (ISCLICKED[6] === 1) {
            if (activePlayer === 0) {
                //insert image inside box
                document.querySelector(".box-7").insertAdjacentHTML('afterbegin', cross);
                //change active player status
                activePlayer = 1;
                //remove active player flash class
                document.querySelector("#p-1-s-1").classList.remove("flash");
                //change active player ui
                uiActivePlayer(activePlayer);
                //change box value
                box[6] = 0;

                //check if player 1 win the match
                isWinOrDraw();

            } else {
                //insert image inside box
                document.querySelector(".box-7").insertAdjacentHTML('afterbegin', circle);
                //change active player status
                activePlayer = 0;
                //remove active player flash class
                document.querySelector("#p-2-s-1").classList.remove("flash");
                //change active player ui
                uiActivePlayer(activePlayer);
                //change box value
                box[6] = 1;


                //check if player 1 win the match
                isWinOrDraw();
            }
        }
        ISCLICKED[6] = 0;
    });

    document.querySelector(".box-8").addEventListener("click", function () {
        if (ISCLICKED[7] === 1) {
            if (activePlayer === 0) {
                //insert image inside box
                document.querySelector(".box-8").insertAdjacentHTML('afterbegin', cross);
                //change active player status
                activePlayer = 1;
                //remove active player flash class
                document.querySelector("#p-1-s-1").classList.remove("flash");
                //change active player ui
                uiActivePlayer(activePlayer);
                //change box value
                box[7] = 0;

                //check if player 1 win the match
                isWinOrDraw();

            } else {
                //insert image inside box
                document.querySelector(".box-8").insertAdjacentHTML('afterbegin', circle);
                //change active player status
                activePlayer = 0;
                //remove active player flash class
                document.querySelector("#p-2-s-1").classList.remove("flash");
                //change active player ui
                uiActivePlayer(activePlayer);
                //change box value
                box[7] = 1;

                //check if player 1 win the match
                isWinOrDraw();
            }
        }
        ISCLICKED[7] = 0;
    });

    document.querySelector(".box-9").addEventListener("click", function () {
        if (ISCLICKED[8] === 1) {
            if (activePlayer === 0) {
                //insert image inside box
                document.querySelector(".box-9").insertAdjacentHTML('afterbegin', cross);
                //change active player status
                activePlayer = 1;
                //remove active player flash class
                document.querySelector("#p-1-s-1").classList.remove("flash");
                //change active player ui
                uiActivePlayer(activePlayer);
                //change box value
                box[8] = 0;

                //check if player 1 win the match
                isWinOrDraw();

            } else {
                //insert image inside box
                document.querySelector(".box-9").insertAdjacentHTML('afterbegin', circle);
                //change active player status
                activePlayer = 0;
                //remove active player flash class
                document.querySelector("#p-2-s-1").classList.remove("flash");
                //change active player ui
                uiActivePlayer(activePlayer);
                //change box value
                box[8] = 1;

                //check if player 1 win the match
                isWinOrDraw();
            }
        }
        ISCLICKED[8] = 0;
    });
}

function uiActivePlayer(activePlayer) {
    if (activePlayer === 0) {
        // console.log(activePlayer);
        document.getElementById("p-1-s-1").classList.add('flash');
    }
    else {
        // console.log(activePlayer);
        document.getElementById("p-2-s-1").classList.add("flash");
    }
}

function resetBox() {
    box.fill(null, 0);
}
function player1Win(){
    //make all boxed non clickable
    ISCLICKED.fill(0, 0);
    // console.log("Player 1 win");
    document.querySelector("#player-1-winner").style.display = "block";
    resetBox();
    //remove flash class
    document.getElementById("p-2-s-1").classList.remove('flash');
    //winner status popup
    document.querySelector(".win-draw-status").style.display = "block";
    //change name
    document.querySelector("#winner-name").innerHTML = player1Name;
}


function player2Win() {
    
    //make all boxed non clickable
    ISCLICKED.fill(0, 0);
    // console.log("Player 2 win");
    document.querySelector("#player-2-winner").style.display = "block";
    resetBox();
    document.getElementById("p-1-s-1").classList.remove('flash');
    //winner status popup
    document.querySelector(".win-draw-status").style.display = "block";
    //change name
    document.querySelector("#winner-name").innerHTML = player2Name;
}

document.getElementById("restart").addEventListener("click", function(){
    //change activeplayer
    if(activePlayer === 0){
        activePlayer = 1;
        document.getElementById("p-2-s-1").classList.add('flash');
    }
    else {
        activePlayer = 0;
        document.getElementById("p-1-s-1").classList.add('flash');
    }
    
    //hide winner status box
    document.querySelector(".win-draw-status").style.display = "none";
    //reset and initialize
    box.fill(null,0);
    ISCLICKED.fill(1, 0);
    //delete all cross circle images
    var x = document.querySelectorAll(".box");
    x.forEach(function(value){
        return value.innerHTML = "";
    });
    //hide winner and draw
    document.querySelector("#player-1-winner").style.display = "none";
    document.querySelector("#player-2-winner").style.display = "none";
    var x = document.querySelectorAll(".draw");
    x.forEach(function (value) {
        return value.style.display = "none";
    });
    //restore win text and color
    document.querySelector("#winner-name").style.color = "rgb(30, 255, 0)";
    document.querySelector("#win-text").innerHTML = ' Win';

});

function isWinOrDraw() {
    if (box[0] === box[1] && box[1] === box[2]) {
        if (Number.isInteger(box[0])) {
            if (box[0] === 0) {
                player1Win();
                //change color | remove filter from image
                document.querySelector(".box-1 > img").style.filter = "none";
                document.querySelector(".box-2 > img").style.filter = "none";
                document.querySelector(".box-3 > img").style.filter = "none";
                
                
            }
            else if (box[0] === 1) {
                player2Win();
                document.querySelector(".box-1 > img").style.filter = "none";
                document.querySelector(".box-2 > img").style.filter = "none";
                document.querySelector(".box-3 > img").style.filter = "none";
                
            }
        }
    }
    else if (box[0] === box[4] && box[4] === box[8]) {
        if (Number.isInteger(box[0])) {
            if (box[0] === 0) {
                player1Win();
                document.querySelector(".box-1 > img").style.filter = "none";
                document.querySelector(".box-5 > img").style.filter = "none";
                document.querySelector(".box-9 > img").style.filter = "none";
            }
            else if (box[0] === 1) {
                player2Win();
                document.querySelector(".box-1 > img").style.filter = "none";
                document.querySelector(".box-5 > img").style.filter = "none";
                document.querySelector(".box-9 > img").style.filter = "none";
            }
        }
    }
    else if (box[0] === box[3] && box[3] === box[6]) {
        if (Number.isInteger(box[0])) {
            if (box[0] === 0) {
                player1Win();
                document.querySelector(".box-1 > img").style.filter = "none";
                document.querySelector(".box-4 > img").style.filter = "none";
                document.querySelector(".box-7 > img").style.filter = "none";
            }
            else if (box[0] === 1) {
                player2Win();
                document.querySelector(".box-1 > img").style.filter = "none";
                document.querySelector(".box-4 > img").style.filter = "none";
                document.querySelector(".box-7 > img").style.filter = "none";
            }
        }
    }
    else if (box[1] === box[4] && box[4] === box[7]) {
        if (Number.isInteger(box[1])) {
            if (box[1] === 0) {
                player1Win();
                document.querySelector(".box-2 > img").style.filter = "none";
                document.querySelector(".box-5 > img").style.filter = "none";
                document.querySelector(".box-8 > img").style.filter = "none";
            }
            else if (box[1] === 1) {
                player2Win();
                document.querySelector(".box-2 > img").style.filter = "none";
                document.querySelector(".box-5 > img").style.filter = "none";
                document.querySelector(".box-8 > img").style.filter = "none";
            }
        }
    }
    else if (box[2] === box[4] && box[4] === box[6]) {
        if (Number.isInteger(box[2])) {
            if (box[2] === 0) {
                player1Win();
                document.querySelector(".box-3 > img").style.filter = "none";
                document.querySelector(".box-5 > img").style.filter = "none";
                document.querySelector(".box-7 > img").style.filter = "none";
            }
            else if (box[2] === 1) {
                player2Win();
                document.querySelector(".box-3 > img").style.filter = "none";
                document.querySelector(".box-5 > img").style.filter = "none";
                document.querySelector(".box-7 > img").style.filter = "none";
            }
        }
    }
    else if (box[2] === box[5] && box[5] === box[8]) {
        if (Number.isInteger(box[2])) {
            if (box[2] === 0) {
                player1Win();
                document.querySelector(".box-3 > img").style.filter = "none";
                document.querySelector(".box-6 > img").style.filter = "none";
                document.querySelector(".box-9 > img").style.filter = "none";
            }
            else if (box[2] === 1) {
                player2Win();
                document.querySelector(".box-3 > img").style.filter = "none";
                document.querySelector(".box-6 > img").style.filter = "none";
                document.querySelector(".box-9 > img").style.filter = "none";
            }
        }
    }
    else if (box[3] === box[4] && box[4] === box[5]) {
        if (Number.isInteger(box[3])) {
            if (box[3] === 0) {
                player1Win();
                document.querySelector(".box-4 > img").style.filter = "none";
                document.querySelector(".box-5 > img").style.filter = "none";
                document.querySelector(".box-6 > img").style.filter = "none";
            }
            else if (box[3] === 1) {
                player2Win();
                document.querySelector(".box-4 > img").style.filter = "none";
                document.querySelector(".box-5 > img").style.filter = "none";
                document.querySelector(".box-6 > img").style.filter = "none";
            }
        }
    }

    else if (box[6] === box[7] && box[7] === box[8]) {
        if (Number.isInteger(box[6])) {
            if (box[6] === 0) {
                player1Win();
                document.querySelector(".box-7 > img").style.filter = "none";
                document.querySelector(".box-8 > img").style.filter = "none";
                document.querySelector(".box-9 > img").style.filter = "none";

            }
            else if (box[6] === 1) {
                player2Win();
                document.querySelector(".box-7 > img").style.filter = "none";
                document.querySelector(".box-8 > img").style.filter = "none";
                document.querySelector(".box-9 > img").style.filter = "none";
            }
        }
    }
    var draw = box.find(function(value){
        return value === null;
    });
    if(draw === undefined){
        document.querySelector("#p-1-s-1").classList.remove("flash");
        document.querySelector("#p-2-s-1").classList.remove("flash");
        resetBox();
        var x = document.querySelectorAll(".draw");
        x.forEach(function (value) {
            return value.style.display = "block";
        });
        //winner status popup
        document.querySelector(".win-draw-status").style.display = "block";
        //change name
        document.querySelector("#winner-name").innerHTML = 'DRAW';
        //change color
        document.querySelector("#winner-name").style.color = "rgb(252, 154, 26)";
        //delete win text
        document.querySelector("#win-text").innerHTML = '';
    }   
}

