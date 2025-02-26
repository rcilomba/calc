let firstNumber = '';
let secondNumber = '';
let operator = '';
let equal = document.querySelector(".equal")



let display = document.querySelector(".display");

const calcContainer = document.querySelector(".calc-container");

calcContainer.addEventListener("click",(e) => {
 const numberValue = e.target.dataset.value;
display.innerHTML = numberValue;
//lagra firstNumber och secondNumber via numberValue
if(firstNumber === ''){
    firstNumber = numberValue;
}

console.log("firstNumber:", firstNumber)
})









function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber){
    return firstNumber / secondNumber; 
}

function operate(firstNumber, operator, secondNumber){
    if(operator === "+"){
        return add(firstNumber, secondNumber)
    } else if (operator === "-"){
        return subtract(firstNumber, secondNumber)
    } else if (operator === "*"){
        return multiply(firstNumber, secondNumber)
    } else if(operator === "/"){
        return divide(firstNumber, secondNumber)
    } else {
    return alert("add correct operator")
    }

}