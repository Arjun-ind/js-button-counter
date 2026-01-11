let htmlNumberElement = document.getElementById("numberElement");   

let increaseButton = document.getElementById("increaseIcon"); 
let decreaseButton = document.getElementById("decreaseIcon"); 
let resetButton = document.getElementById("resetIcon");   

decreaseButton.disabled = true;

let showMessage = document.getElementById("messageShown");
 
increaseButton.addEventListener("click",increaseNumber); 
decreaseButton.addEventListener("click", decreaseNumber); 
resetButton.addEventListener("click", resetNumber); 

function increaseNumber() { 
    let currentNumber = htmlNumberElement.textContent; 
    let increaseNumber = parseInt(currentNumber) + 1; 
    htmlNumberElement.textContent = increaseNumber;   
    decreaseButton.disabled = false; 
    showMessage.textContent = ""; 
    showMessage.style.color = ""
}

function decreaseNumber(){
    let currentNumber = parseInt(htmlNumberElement.textContent); 

    if (currentNumber > 0) {
        let newNumber =  currentNumber - 1 ; 
        htmlNumberElement.textContent = newNumber;  
         
        if (newNumber === 0) {
        decreaseButton.disabled = true; 
        showMessage.textContent = "Minimum Reached"; 
        styleMessage();
        }
}
}

function resetNumber() {
    htmlNumberElement.textContent = 0;
    showMessage.textContent = "Value Reset"; 
    decreaseButton.disabled = true; 
    styleMessage();
}

function styleMessage() { 
    showMessage.style.color = "Red"; 
    showMessage.style.fontSize = "34px";

} 


function keyboardKeysFunctions(event) {
    if(event.key == "ArrowUp") { 
        increaseNumber();
    }
    if(event.key == "ArrowDown") {
        decreaseNumber();
    }

    if (event.key == "r" || event.key == "R") { 
        resetNumber();

    }
}


document.addEventListener("keydown", keyboardKeysFunctions);