let htmlNumberElement = document.getElementById("numberElement"); 


function increaseNumber() { 
    let currentNumber = htmlNumberElement.textContent; 
    let increaseNumber = parseInt(currentNumber) + 1; 
    htmlNumberElement.textContent = increaseNumber;

}


function decreaseButton(){
    let currentNumber = parseInt(htmlNumberElement.textContent) - 1 ; 
    htmlNumberElement.textContent = currentNumber;

    if (htmlNumberElement.textContent < 0) {
        htmlNumberElement.textContent = 0;
    }
}


function resetButton() {
    htmlNumberElement.textContent = 0
}