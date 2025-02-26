let firstNumber = '';
let secondNumber = '';
let operator = '';
let equal = document.querySelector(".equal")



let display = document.querySelector(".display");

const numbers = document.querySelector(".numbers");

numbers.addEventListener("click",(e) => {
 const numberValue = e.target.dataset.value;
display.innerHTML += numberValue;
//lagra firstNumber och secondNumber via numberValue
if(firstNumber === ''){
    firstNumber = numberValue;
} else if (firstNumber !== '' && operator !== ''){
    secondNumber = numberValue;
}

console.log("first number:", firstNumber, "operator:", operator, "second number:", secondNumber)
})

const operators = document.querySelector(".operators");

//operator
operators.addEventListener("click",(e) =>{
    const operatorValue = e.target.dataset.value;
    display.innerHTML += "" + operatorValue + "";

    if(operator === ''){
        operator = operatorValue;
    }
    
    console.log("secondNumber:", secondNumber)
})


/*
-första knapp klick: lagra första siffran in firstNumber
om första klick är ett nummer, lagra i display, annars 
andra knapp klick: lagra operator i operator
tredje knapp klick: lagra andra siffran i secondNmber
fjärde knapp klick : lika med, utför beräkning av firstNumber operator secondNumber
 */


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