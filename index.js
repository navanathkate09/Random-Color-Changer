console.log("Script are working...");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const colorCode = document.querySelector(".color-code");

let interval;

function getColor() {
  if (!interval) {
    interval = setInterval(() => {
        const randomColor = `#${Math.random()
          .toString(16)
          .substring(2, 8)
          .padEnd(6, 0)}`;
        console.log(randomColor);
        document.body.style.backgroundColor = randomColor;
        colorCode.innerText = `${randomColor}`;
      }, 1000);
  }
}

startBtn.addEventListener("click", getColor);

stopBtn.addEventListener("click", function () {
  console.log("stop clicked..");
  clearInterval(interval);
  interval = null;
});
