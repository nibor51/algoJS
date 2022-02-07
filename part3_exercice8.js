let nbPrice = 0
let sommePrice = 0
let addPrice = true

while (addPrice) {   
    let price = parseInt(prompt("Entrez un Prix : "),10)
    while (isNaN(price)) {
        price = parseInt(prompt("Erreur de saisie veuillez entrer un Prix : "),10)
    }
    sommePrice += price
    nbPrice++
    addPrice = confirm("Voulez vous ajouter une valeur ?")
}

console.log(`Prix à Payer : ${sommePrice}`)

let argent = parseInt(prompt(`Vous devez payer ${sommePrice} € \nRenseignez le montant versé pour payer`))
const argentOK = argent >= sommePrice
while (isNaN(argent) && !argentOK) {
    argent = parseInt(prompt(`\nVous devez payer ${sommePrice} € \nRenseignez le montant versé pour payer`))
}

let nb500 = 0
let nb200 = 0
let nb100 = 0
let nb50 = 0
let nb20 = 0
let nb10 = 0
let nb5 = 0
let nb2 = 0
let nb1 = 0
let monnaie = argent - sommePrice
console.log(monnaie);
while (monnaie !== 0) {
    
    if (monnaie>=500) {
        monnaie -= 500
        nb500++    
    } else if (monnaie>=200) {
        monnaie -= 200
        nb200++    
    } else if (monnaie>=100) {
        monnaie -= 100
        nb100++
    } else if (monnaie>=50) {
        monnaie -= 50
        nb50++
    } else if (monnaie>=20) {
        monnaie -= 20
        nb20++
    } else if (monnaie>=10) {
        monnaie -= 10
        nb10++
    } else if (monnaie>=5) {
        monnaie -= 5
        nb5++
    } else if (monnaie>=2) {
        monnaie -= 2
        nb2++    
    } else {
        monnaie -= 1
        nb1++
    }
}
console.log(monnaie);
alert(`${nb500} x Billet de 500€, ${nb200} x Billet de 200€, ${nb100} x Billet de 100€, ${nb50} x Pièce de 50€, ${nb20} x Pièce de 20€, ${nb10} x Billet de 10€, ${nb5} x Billet de 5€, ${nb2} x Pièce de 2€, ${nb1} x Pièce de 1€`)
