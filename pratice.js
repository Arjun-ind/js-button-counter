let contentChange = document.getElementById("headingChanged") ; 

document.addEventListener("click", changeHeading);




function changeHeading() { 
    contentChange.textContent = "Button Clicked";
}



let numberIncreased = document.getElementById("numberIncrease"); 



document.addEventListener("dblclick", increaseNumber);

function increaseNumber() {
    let currentNumber = parseInt(numberIncreased.textContent) + 1;   
    numberIncreased.textContent = currentNumber;
} 


let inputFieldElement = document.getElementById("inputBox"); 
let contentShowElement = document.getElementById("showText"); 

document.addEventListener("input", displayContent); 


function displayContent() {
    inputFieldElement.value = contentShowElement.textContent;
}