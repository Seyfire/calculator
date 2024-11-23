function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, op) {
    switch (op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

function addToDisplay (buttonNumber) {
    // populates the calculator display when number buttons are pressed
    
    // clears the input field if needed
    if (isNewInput) {
        display.textContent = "";
        isNewInput = false;
    }

    // prevents input of numbers greater than 9 digits
    if (display.textContent.length < 9) {
        refreshDisplay(Number(display.textContent + buttonNumber));
    }

}

function refreshDisplay (num) {
    // refreshes the calculator display with the passed number

    // round to 8th digit, if num is a float
    if (!Number.isInteger(num)) {
        display.textContent = parseFloat(num.toFixed(8));
    } else if (num > 999999999) {
        // display numbers bigger than 9 digits as exponential notation
        display.textContent = num.toExponential(4);
    } else {
        display.textContent = num;
    }
}

function getDisplayNumber () {
    // returns the number on the calculator display
    return Number(display.textContent);
}

function getOperator (str) {
    // returns operator symbol based on passed str
    switch (str) {
        case "addition":
            return "+";
        case "subtract":
            return "-";
        case "multiply":
            return "*";
        case "divide":
            return "/";
    }
}

let display = document.querySelector(".display");

// NUMBER buttons
const nodeListNumber = document.querySelectorAll(".number");
Array.from(nodeListNumber).map( (button) => {
    button.addEventListener("click", () => {
        addToDisplay(button.textContent); 
        previousCalc = null;
    });
});

// CLEAR button
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    // clears the input field & returns variables to initial state
    display.textContent = "";
    workingNum = null;
    operator = null;
    previousCalc = null;
});

// OPERATION buttons (+, -, *, /)
const operators = Array.from(document.querySelectorAll(".operator"));
operators.map( (button) => {
    button.addEventListener("click", (e) => {
        // sets the operator to the corresponding button press
        operator = getOperator(e.target.id);

        // performs operation if there's a value already stored
        if (workingNum) {
            refreshDisplay(operate(workingNum, getDisplayNumber(), operator));
        }

        workingNum = getDisplayNumber();

        // reset button input to a fresh state
        isNewInput = true;
        previousCalc = null;

    });
});

// "EQUALS" button
const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {

    // repeat previous operation, if button is pressed repeatedly
    if (previousCalc) {
        refreshDisplay(operate(getDisplayNumber(), previousCalc, operator));
    // otherwise, perform the operation as normal
    } else if (workingNum) {
        previousCalc = getDisplayNumber();
        refreshDisplay(operate(workingNum, getDisplayNumber(), operator));
        workingNum = null;
    }

    isNewInput = true;
});

let workingNum = null;
let isNewInput = true;
let previousCalc = null;
let operator;
