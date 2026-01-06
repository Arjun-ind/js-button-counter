let htmlNumberElement = document.getElementById("numberElement"); 


function increaseNumber() { 
    let currentNumber = htmlNumberElement.textContent; 
    let increaseNumber = parseInt(currentNumber) + 1; 
    htmlNumberElement.textContent = increaseNumber;

}

function resetButton() {
    htmlNumberElement.textContent = 0
}