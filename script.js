const container = document.querySelector('.container');
const boxes = document.querySelectorAll('.box');
let turn = "X";
let round = 0;
let gameOver = false;

function clickBox(){
  for (let i = 0; i < boxes.length; i++){
     let box = boxes[i];
      box.addEventListener('click', function(e){
        if ( gameOver === true) return;
          if (box.textContent === ""){
            box.textContent = turn;
            console.log(box);
            changePlayers();
          }
      })
  }
}
clickBox();

function changePlayers(){
  if ( turn === "X"){
    turn = "O";
  }else {
    turn = "X";
  }
  round++;

  let oWon = winningConditions("O");
  let xWon = winningConditions("X");
   if (oWon) {
       gameOver = true;
       winner("O är vinnaren");
   } else if (xWon) {
       gameOver = true;
       winner("X är vinnaren");
   } else if (round === 9){
       gameOver = true;
       winner("Oavgjort");
   }
}

function winningConditions(type){
 let winningConditions = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  for (let i = 0; i< winningConditions.length; i++){
    let winner = true;
    for (let j = 0; j < winningConditions[i].length; j++){
      let value = winningConditions[i][j];
      if (boxes[value].textContent !== type){
      winner = false;
      }
    }
      if ( winner === true){
        return true;
      }
  }
  return false;
}

function restartGame(){
  let button = document.querySelector("button").
  addEventListener('click', function(e){
    for (let i = 0; i < boxes.length; i++){
      boxes[i].innerHTML = "";
    }
      popUp.style.display ="none";
      round = 0;
      gameOver = false;
  })
}
restartGame();

let popUp = document.querySelector(".popUp");
function winner(winnerText){
  let text = document.querySelector(".popUp p");
  popUp.style.display = 'block';
  text.textContent= winnerText;

    setTimeout(function(){
      popUp.style.display = "none";
    },3000);
}
