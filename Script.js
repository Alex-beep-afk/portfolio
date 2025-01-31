  function basculerElement(mon) {
    const element = document.getElementById(mon);

    // Si l'élément est masqué, l'afficher, sinon le masquer
    if (element.style.display === "none") {
        element.style.display = "flex" ;
    } else {
        element.style.display = "none";
    }
}
const elementCache1 = document.getElementById('cv');
const elementCache2 = document.getElementById('experiences');
const elementCache3 = document.getElementById('diplomes');
const elementCache4 = document.getElementById('bonus');

