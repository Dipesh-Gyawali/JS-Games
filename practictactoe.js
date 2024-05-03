let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let winner = document.querySelector("#winner");

let turn0 = true;
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  // console.log(box)
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    count++;
    console.log(count, "tttt");

    checkPattern();
  });
});

const checkPattern = () => {
  for (let x of winPatterns) {
    let posA = boxes[x[0]].innerText;
    let posB = boxes[x[1]].innerText;
    let posC = boxes[x[2]].innerText;

    console.log(posA, posB, posC);

    if (posA !== "" && posB !== "" && posC !== "") {
      if (posA === posB && posB === posC) {
        winner.innerHTML = `The Winner : ${posA}`;

        boxes.forEach((box) => {
          box.disabled = true;
        });
      }

      if (count === 9 && (posA !== posB || posB !== posC)) {
        winner.innerHTML = "DRAW";
      }
    }
    // console.log(x)
    // console.log(x[0],x[1],x[2])
  }
};

reset.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.disabled = false;
    turn0 = true;
    winner.innerHTML = "";
    count = 0;
  });
});
