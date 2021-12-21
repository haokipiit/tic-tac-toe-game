const buttons = document.querySelectorAll(".btn");
const b1 = document.querySelector(".b1");
const b2 = document.querySelector(".b2");
const b3 = document.querySelector(".b3");
const b4 = document.querySelector(".b4");
const b5 = document.querySelector(".b5");
const b6 = document.querySelector(".b6");
const b7 = document.querySelector(".b7");
const b8 = document.querySelector(".b8");
const b9 = document.querySelector(".b9");
const space = document.querySelector(".space");
const reset = document.querySelector(".reset");

let turn = true;
let count = 0;
let win = false, draw = false;
let isFlag = false;

function game () {

  function winnerBoard(winner) {
    const flag = document.createElement("div");
    flag.className = "flag";
    space.appendChild(flag);
    isFlag = true;
    if (winner === "X" || winner === "O") {
      flag.innerText = `< ${winner} wins! >`;
    } else {
      flag.innerText = "< Draw! >";
    }
    return;
  }

  for (let btn of buttons) {

    reset.addEventListener("click", () => {
      btn.innerText = "";
      turn = true;
      count = 0;
      (win = false), (draw = false);
      if (isFlag) {
        const flag = document.querySelector(".flag");
        isFlag = false;
        flag.remove();
      }
    });

    btn.addEventListener("click", (e) => {
      if (btn.innerText === "" && turn === true && win !== true && draw !== true) {
        e.target.innerText = "O";
        turn = false;
        count++;
      } else if (btn.innerText === "" && turn === false && win !== true && draw !== true) {
        e.target.innerText = "X";
        turn = true;
        count++;
      } 
      
      //Winning options
      if (
        (b1.innerText === "X" &&
          b2.innerText === "X" &&
          b3.innerText === "X") ||
        (b4.innerText === "X" &&
          b5.innerText === "X" &&
          b6.innerText === "X") ||
        (b7.innerText === "X" &&
          b8.innerText === "X" &&
          b9.innerText === "X") ||
        (b1.innerText === "X" &&
          b4.innerText === "X" &&
          b7.innerText === "X") ||
        (b2.innerText === "X" &&
          b5.innerText === "X" &&
          b8.innerText === "X") ||
        (b3.innerText === "X" &&
          b6.innerText === "X" &&
          b9.innerText === "X") ||
        (b1.innerText === "X" &&
          b5.innerText === "X" &&
          b9.innerText === "X") ||
        (b7.innerText === "X" && b5.innerText === "X" && b3.innerText === "X")
      ) {
        win = true;
        let winner = "X";
        winnerBoard(winner);
        return;
      } else if (
        (b1.innerText === "O" &&
          b2.innerText === "O" &&
          b3.innerText === "O") ||
        (b4.innerText === "O" &&
          b5.innerText === "O" &&
          b6.innerText === "O") ||
        (b7.innerText === "O" &&
          b8.innerText === "O" &&
          b9.innerText === "O") ||
        (b1.innerText === "O" &&
          b4.innerText === "O" &&
          b7.innerText === "O") ||
        (b2.innerText === "O" &&
          b5.innerText === "O" &&
          b8.innerText === "O") ||
        (b3.innerText === "O" &&
          b6.innerText === "O" &&
          b9.innerText === "O") ||
        (b1.innerText === "O" &&
          b5.innerText === "O" &&
          b9.innerText === "O") ||
        (b7.innerText === "O" && b5.innerText === "O" && b3.innerText === "O")
      ) {
        win = true;
        let winner = "O";
        winnerBoard(winner);
        return;
      } else if (count === 9) {
        draw = true;
        winner = "Draw";
        winnerBoard(winner);
        return;
      }
    });
  }
}

game();
