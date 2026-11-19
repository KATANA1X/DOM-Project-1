// Selections et fonctions
const totalSpan = document.querySelector('.total');
function calculerTotal(){
let total = 0;
const cartes = document.querySelectorAll('.card');
cartes.forEach((carte) => {
    const prixUnitaire = parseInt(carte.querySelector('.unit-price').textContent);
    const quantite = parseInt(carte.querySelector('.quantity').textContent);
    total += prixUnitaire * quantite;
});
totalSpan.textContent = total + ' $';
}
// Gestion de boutons "+" et "-"
/* "+" */
const boutonsPlus = document.querySelectorAll('.fa-plus-circle');
boutonsPlus.forEach((btnPlus) => {
    btnPlus.addEventListener('click', () => {
        const quantiteSpan = btnPlus.nextElementSibling;
        let quantite = parseInt(quantiteSpan.textContent);
        quantite++;
        quantiteSpan.textContent = quantite;
        calculerTotal();
    });
});
/* "-" */
const boutonsMoins = document.querySelectorAll('.fa-minus-circle');
boutonsMoins.forEach((btnMoins) => {
    btnMoins.addEventListener('click', () => {
        const quantiteSpan = btnMoins.previousElementSibling;
        let quantite = parseInt(quantiteSpan.textContent);
        if (quantite > 0) {
            quantite--;
            quantiteSpan.textContent = quantite;
            calculerTotal();
        }
    });
});
// Gestion des boutons poubelle (suprimer l'article)
const boutonsSupprimer = document.querySelectorAll('.fa-trash-alt');
boutonsSupprimer.forEach((btnSupprimer) => {
    btnSupprimer.addEventListener('click', () => {
        btnSupprimer.closest('.card').parentElement.remove();
        calculerTotal();
    });
});
// Gestion des boutons Coeur ( aimer / ne plus aimer )
const boutonsCoeur = document.querySelectorAll('.fa-heart');
boutonsCoeur.forEach((coeur) => {
    coeur.addEventListener('click', () => {
        if (coeur.style.color === 'red') {
            coeur.style.color = 'black';
        } else {
            coeur.style.color = 'red';
        }
    });
});