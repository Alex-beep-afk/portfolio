  function basculerElement(mon, bouton) {
    const element = document.getElementById(mon);
    
    bouton.classList.toggle("enfonce");

    if (element.style.display === "none") {
        element.style.display = "flex" ;
        
    } else {
        element.style.display = "none";
        
    }
    
}



