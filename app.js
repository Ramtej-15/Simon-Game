let btns = document.querySelectorAll(".innerbox");

for (btn of btns) {
  btn.addEventListener("click", () => {
    console.log(btn.classList[0]);
  });
}
