let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let turn = document.querySelector("#turn");

let turn0 = true;
let win = false;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
    turn0 = true;
    turn.innerText = "Player O's turn";
    resetBox();
    win = false;
}

const resetBox = () => {
    boxes.forEach((box) => {
        box.innerText = "";
    });
}

reset.addEventListener("click", resetGame);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "" && !win) {
      if (turn0) {
        box.innerText = "O";
        turn0 = false;
      } else {
        box.innerText = "X";
        turn0 = true;
      }
    }

    checkWinner();
    changeTurn();
  });
});

const checkWinner = () => {
  for (let pattern of winPattern) {
    let position1 = boxes[pattern[0]].innerText;
    let position2 = boxes[pattern[1]].innerText;
    let position3 = boxes[pattern[2]].innerText;

    if (position1 !== "" && position2 !== "" && position3 !== "") {
      if (
        position1 === position2 &&
        position1 === position3 &&
        position2 === position3
      ) {
        console.log("win ", position1);
        showWinner();
      }
    }
  }
};

const changeTurn = () => {
  if (!win) {
    turn.innerText = turn0 ? "Player O's turn" : "Player X's turn";
  }
};

const showWinner = () => {
  win = true;
  turn.innerText = turn0 ? "Player X wins!" : "Player O wins!";
};