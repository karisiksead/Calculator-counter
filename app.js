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
      value.style.color = "white";
    }
    if (count < 0) {
      value.style.color = "rgb(221, 40, 40)";
    }
    if (count === 0) {
      value.style.color = "white";
    }
    value.textContent = count;
  });
});

// CALCULATOR
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.querySelector(".result");
const operators = document.querySelectorAll(".operator");
const sign = document.getElementById("sign");

// let resultat;

operators.forEach((operator) => {
  operator.addEventListener("click", function (e) {
    const style = e.currentTarget.classList;
    var resultat;

    if (style.contains("plus")) {
      resultat = parseFloat(num1.value) + parseFloat(num2.value);
      sign.textContent = "+";
    }
    if (style.contains("minus")) {
      resultat = num1.value - num2.value;
      sign.textContent = "-";
    }
    if (style.contains("division")) {
      sign.textContent = "/";
      // Upravljanje izuzetkom u slucaju deljenja sa nulom
      try {
        if (num2.value == 0) {
          throw Error("Deljenje nulom nije dozvoljeno");
        } else {
          resultat = num1.value / num2.value;
        }
      } catch (err) {
        // alert("Error name " + err.name);
        alert(err.message);
      }
    }
    if (style.contains("multiplication")) {
      resultat = num1.value * num2.value;
      sign.textContent = "*";
    }
    if (!isNaN(resultat)) {
      result.textContent = resultat;
    } else {
      num1.value = "";
      num2.value = "";
      result.textContent = "";
    }
  });
});
