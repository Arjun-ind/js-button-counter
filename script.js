let contentChangeElemet = document.getElementById("contentChange") ;  


contentChangeElemet.addEventListener("mouseover", function() {
    contentChangeElemet.textContent = "Hovered in";
    contentChangeElemet.style.color = "green"; 
    contentChangeElemet.style.fontSize = "30px"
});


contentChangeElemet.addEventListener("mouseout", function() {
    contentChangeElemet.textContent = "Hovered Out"; 
    contentChangeElemet.style.fontSize = "30px"
    contentChangeElemet.style.color = "red";
});
