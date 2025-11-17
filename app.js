const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");

function appendValue(value) {
  if (value === "C") {
    display.value = "";
  } 
  else if (value === "DEL") {
    display.value = display.value.slice(0, -1);
  } 
  else if (value === "=") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  } 
  else {
    display.value += value;
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    appendValue(btn.dataset.value);
  });
});
