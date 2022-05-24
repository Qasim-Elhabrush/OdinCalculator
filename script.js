let entry = "";
let operator = "";
let calculatedTotal = 0.0;
let num1 = "";
let num2 = "";
let initial = true;
//displays the number/symbol pressed in top box
const writeEntry = function(value) {
        if (entry.length < 20) {
            entry += value;
            document.getElementById("textEntry").innerText = entry;
        } else {}
    }
    //Multiply Function
const multiply = function() {
    if (initial == true) {
        num1 = document.getElementById("textEntry").innerText;
        entry = "";
        operator = "multiply";
        initial = false;
    } else {
        calculate();
        operator = "multiply";
    }
}

//DivideFunction
const divide = function() {
        if (initial == true) {
            num1 = document.getElementById("textEntry").innerText;
            entry = "";
            operator = "divide";
            initial = false;
        } else {
            calculate();
            operator = "divide";
        }
    }
    //Substract Function
const subtract = function() {
        if (initial == true) {
            num1 = document.getElementById("textEntry").innerText;
            entry = "";
            operator = "subtract";
            initial = false;
        } else {
            calculate();
            operator = "subtract";
        }
    }
    //Sum Function
const sum = function() {
    if (initial == true) {
        num1 = document.getElementById("textEntry").innerText;
        entry = "";
        operator = "sum";
        initial = false;
    } else {
        calculate();
        operator = "sum";
    }
}
const calculate = function() {
    let num2 = document.getElementById('textEntry').innerText;

    if (operator == "multiply") {
        calculatedTotal = parseFloat(num1) * parseFloat(num2);
    } else if (operator == "divide") {
        calculatedTotal = parseFloat(num1) / parseFloat(num2);
    } else if (operator == "subtract") {
        calculatedTotal = parseFloat(num1) - parseFloat(num2);
    } else if (operator == "sum") {
        calculatedTotal = parseFloat(num1) + parseFloat(num2);
    }
    num2 = "";
    entry = "";
    document.getElementById('textEntry').innerText = calculatedTotal.toString();
    num1 = calculatedTotal.toString();

};

//reloads page
const clear = function() {
        window.location.reload();
    }
    //creates event listeners for each button
for (let i = 0; i <= 9; i++) {
    document.getElementById(`${i}`).addEventListener("click", function() { writeEntry(i); });
}
document.getElementById(".").addEventListener("click", function() { writeEntry("."); });
document.getElementById("*").addEventListener("click", multiply);
document.getElementById("/").addEventListener("click", divide);
document.getElementById("-").addEventListener("click", subtract);
document.getElementById("+").addEventListener("click", sum);
document.getElementById("=").addEventListener("click", calculate)
document.getElementById("=").addEventListener("click", () => { initial = true; })
document.getElementById("Clear").addEventListener("click", clear);



//makes button dark when pressed
let elements = document.getElementsByTagName("button");
for (let i = 0; i <= elements.length - 1; i++) {
    elements[i].addEventListener("click", () => elements[i].style.backgroundColor = "rgb(194,193,193,.8)");
}

for (let i = 0; i <= elements.length - 1; i++) {
    elements[i].addEventListener("mouseleave", () => elements[i].style.backgroundColor = "rgb(194, 193, 193)");
}