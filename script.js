const countValue = document.getElementById("count-value");
const decrementBtn = document.getElementById("decrement-btn");
const incrementBtn = document.getElementById("increment-btn");
const resetBtn = document.getElementById("reset-btn");

let count = 0;

function updateDisplay() {
  countValue.textContent = count;
}

incrementBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

