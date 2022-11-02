let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let result = document.getElementById("result")

function add(){
    let res = num1 + num2
    result.textContent += ("Sum: " + res + "  ")
}

function subtract(){
    let res = num1 - num2
    result.textContent += ("Difference: " + res + "  ")
}

function multiply(){
    let res = num1*num2
    result.textContent += ("Product: " + res + "  ")
}

function divide(){
    let res = num1/num2
    result.textContent += ("Division: " + res + "  ")
}