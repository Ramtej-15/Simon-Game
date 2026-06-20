let btns = document.querySelectorAll(".innerbox");
let body = document.querySelector("body");

let gamestart = false;
//
body.addEventListener("keypress", () => {
  gamestart = true;
  gamesequence = [];
  usersequence = [];
  generaterandomcolor();
});

function generaterandomcolor() {
  let color = ["red", "green", "purple", "yellow"];
  let generatedidx = Math.floor(Math.random() * color.length);
  console.log(generatedidx);
  gameblink(color[generatedidx]);
}

function gameblink(color) {
  let div = document.querySelector("." + color);
  console.dir(div);
  div.classList.add("flash");
  setTimeout(() => {
    div.classList.remove("flash");
  }, 300);
  gamesequence.push(color);
}

for (let btn of btns) {
  btn.addEventListener("click", () => {
    usersequence.add(btn.classList[0]);
  });
}

let gamesequence = [];
let usersequence = [];
