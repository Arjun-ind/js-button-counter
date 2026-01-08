let htmlNumberElement = document.getElementById("numberElement");   

let increaseButton = document.getElementById("increaseIcon"); 
let decreaseButton = document.getElementById("decreaseIcon"); 
let resetButton = document.getElementById("resetIcon");

 
increaseButton.addEventListener("click",increaseNumber); 
decreaseButton.addEventListener("click", decreaseNumber); 
resetButton.addEventListener("click", resetNumber);
















function increaseNumber() { 
    let currentNumber = htmlNumberElement.textContent; 
    let increaseNumber = parseInt(currentNumber) + 1; 
    htmlNumberElement.textContent = increaseNumber;

}


function decreaseNumber(){
    let currentNumber = parseInt(htmlNumberElement.textContent) - 1 ; 
    htmlNumberElement.textContent = currentNumber;

    if (htmlNumberElement.textContent < 0) {
        htmlNumberElement.textContent = 0;
    }
}


function resetNumber() {
    htmlNumberElement.textContent = 0;
}