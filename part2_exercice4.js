let age = parseInt(prompt('Veuillez indiquer votre âge : '))
let permis = parseInt(prompt('Depuis combien d\'année avez vous le permis?'))
let accident = parseInt(prompt("Combien avez-vous deja eu d'accident ?"))
let anciennete = parseInt(prompt('Depuis combien d\'année avez vous un contrat chez nous ?'))

const permisOK = permis>= 2
const ageOK = age >= 25

let typeAssurance

if (!permisOK && !ageOK) {
    if (accident === 0) {
        typeAssurance = 'rouge'
    } else typeAssurance = 'refus'
} else if ( !ageOK && permisOK || ageOK && !permisOK) {
    if (accident === 0) {
        typeAssurance = 'orange'
    } else if (accident === 1) {
        typeAssurance = 'rouge'
    } else typeAssurance = 'refus'
} else if (ageOK && permisOK) {
    if (accident === 0) {
        typeAssurance = 'vert'
    } else if (accident === 1) {
        typeAssurance = 'orange'
    } else if (accident === 2) {
        typeAssurance = 'rouge'
    } else typeAssurance = 'refus'
}

if (anciennete > 1 && typeAssurance !== 'refus') {
    if (typeAssurance === 'rouge') {
        typeAssurance = 'orange'
    } else if (typeAssurance === 'orange') {
        typeAssurance = 'vert'
    } else 
        typeAssurance = 'bleu'
}
alert(`Votre niveau d'assurance sera : ${typeAssurance}`)

