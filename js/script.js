const cross = "cross";
const circle = "circle";

const boxElements = document.querySelectorAll(".box");
const resetButton = document.getElementById("reset");

let turn = cross;

function placeMark(box, currentClass) {
 box.classList.add(currentClass);
}

function handleClick(e) {
  const boxTarget = e.target;
  placeMark(boxTarget, turn);
  if (turn === cross) {
    //boxTarget.styles.cross;
      turn = circle;
  }else {
    //boxTarget.styles.circle;
      turn = cross;
    }
}

function startGame() {
  boxElements.forEach((box) => {
    box.addEventListener("click", handleClick, { once: true });
  });
}

startGame();

resetButton.onclick = startGame;
resetButton.addEventListener("click", () => {
  boxElements.forEach(function (box)s {
      box.classList.remove("cross", "circle");
    });
 });