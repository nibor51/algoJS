// Ecrire un algorithme qui calcul et affiche la moyenne de n nombres saisies au clavier.

let nbValue = 0
let sommeValue = 0
let addValue = true

while (addValue) {   
    let value = parseInt(prompt("Entrez un nombre : "),10)
    while (isNaN(value)) {
        value = parseInt(prompt("Erreur de saisie veuillez entrer un nombre : "),10)
    }
    sommeValue += value
    nbValue++
    addValue = confirm("Voulez vous ajouter une valeur ?")
    
}

console.log(`Moyenne : ${Math.round(sommeValue / nbValue)}`)




















