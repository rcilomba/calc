let firstNumber = '';
let secondNumber = '';
let operator = '';
let equal = document.querySelector(".equal")



let display = document.querySelector(".display");

const numbers = document.querySelector(".numbers");

numbers.addEventListener("click",(e) => {
 const numberValue = e.target.dataset.value;
display.innerHTML += numberValue;
console.log("display.innerHTML after adding number:", display.innerHTML);
//lagra firstNumber och secondNumber via numberValue
if(firstNumber === ''){
    firstNumber = numberValue;
} else if (firstNumber !== '' && operator !== ''){
    secondNumber += numberValue;
}

})

const operators = document.querySelector(".operators");

//operator
operators.addEventListener("click",(e) =>{
    const operatorValue = e.target.dataset.value;
    display.innerHTML += "" + operatorValue + "";
    console.log("display.innerHTML after adding operator:", display.innerHTML);

    if (operator === '' && firstNumber !== '') {
        operator = operatorValue;
    }  
    
    
})
equal.addEventListener("click", ()=>{

if (['+', '-', '*', '/'].includes(operator) && secondNumber !== '')
    {
    

        let result = operate(Number(firstNumber), operator, Number(secondNumber));

        if (result !== "Error") {
            console.log("Setting display.innerHTML to:", result);
            display.innerHTML = result;
            console.log("display.innerHTML after setting result:", display.innerHTML);
            firstNumber = result.toString();
            secondNumber = '';
            operator = '';
        } else {
            display.innerHTML = "Error";
            console.log("display.innerHTML after setting error:", display.innerHTML);
        }
    
    }
    
    
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

console.log("Operate function called with", firstNumber, operator, secondNumber)

    if(operator === "+"){
        return add(firstNumber, secondNumber)
    } else if (operator === "-"){
        return subtract(firstNumber, secondNumber)
    } else if (operator === "*"){
        return multiply(firstNumber, secondNumber)
    } else if(operator === "/"){
        return divide(firstNumber, secondNumber)
    } else {
    return "Error";
    }

}