function toggleMenu() {
    var menu = document.getElementById("menu"); 
    if (menu.style.display === "block")  {
         menu.style.display = "none";
    } 
    else {
        menu.style.display = "block";
    } 
}
// /Explication Déclaration de la fonction toggleMenu :

// javascript
// function toggleMenu() {
// Cette ligne déclare une fonction nommée toggleMenu. Une fonction est un bloc de code conçu pour effectuer une tâche spécifique. Dans ce cas, la tâche consiste à afficher ou masquer le menu.

// Récupération de l'élément menu :

// javascript
// var menu = document.getElementById("menu");
// Cette ligne utilise la méthode getElementById pour récupérer l'élément HTML avec l'ID menu. Cet élément est stocké dans la variable menu. Cela permet de manipuler cet élément plus tard dans la fonction.

// Condition pour vérifier l'état d'affichage du menu :

// javascript
// if (menu.style.display === "block") {
// Cette ligne vérifie si la propriété display de l'élément menu est actuellement définie sur block. Si c'est le cas, cela signifie que le menu est actuellement visible.

// Masquer le menu si visible :

// javascript
// menu.style.display = "none";
// Si la condition précédente est vraie (le menu est visible), cette ligne change la propriété display de l'élément menu à none, ce qui masque le menu.

// Afficher le menu si masqué :

// javascript
// } else {
//   menu.style.display = "block";
// }
// Si la condition initiale est fausse (le menu est masqué), le code dans le bloc else est exécuté. Cette ligne change la propriété display de l'élément menu à block, ce qui rend le menu visible.

// En résumé, cette fonction toggleMenu alterne l'affichage du menu entre visible et masqué chaque fois qu'elle est appelée. Elle est déclenchée par un clic sur l'icône du menu burger, grâce à l'attribut onclick dans le HTML./ 
