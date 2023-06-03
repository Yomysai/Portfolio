// Tableau contenant les chemins des images de fond
var images = ['../image/hoe.jpg', '../image/homepage.50.jpg', '../image/55d4s.jpg'];

// Fonction qui retourne un nombre aléatoire entre 0 et max
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Fonction qui change le fond d'écran
function changeBackground() {
    // Génère un nombre aléatoire entre 0 et la longueur du tableau images
    var randomIndex = getRandomInt(images.length);
    
    // Sélectionne l'élément avec la classe "portrait"
    var portraitDiv = document.querySelector('.portrait');

}

// Événement qui se déclenche lorsque la page est chargée
window.onload = changeBackground;
