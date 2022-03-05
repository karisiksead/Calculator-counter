// COUNTER
// set start value
let count = 0;

// values and buttons
const value = document.getElementById("value");

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("decreace")) {
      count--;
    } else if (styles.contains("increace")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});

// CALCULATOR
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.querySelector(".result");
const operators = document.querySelectorAll(".operator");

// let resultat;

operators.forEach((operator) => {
  operator.addEventListener("click", function (e) {
    const style = e.currentTarget.classList;
    var resultat;

    if (style.contains("plus")) {
      resultat = parseFloat(num1.value) + parseFloat(num2.value);
    }
    if (style.contains("minus")) {
      resultat = num1.value - num2.value;
    }
    if (style.contains("division")) {
      resultat = num1.value / num2.value;
    }
    if (style.contains("multiplication")) {
      resultat = num1.value * num2.value;
    }
    if (!isNaN(resultat)) {
      result.textContent = resultat;
    } else {
      num1.value = "";
      num2.value = "";
    }

    console.log(resultat);
  });
});
