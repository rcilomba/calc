let firstNumber;
let secondNumber;
let operate;

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