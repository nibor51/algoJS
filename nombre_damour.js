let prenoms = 'leo lea'.toUpperCase();
let names = prenoms.split(' '); // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split
let resultat = ""

for (let i = 0; i < 2; i++) {
    let somme = 0
    for (let j = 0; j < names[i].length ; j++) {   // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/length
        let letter = parseInt(names[i].charAt(j).charCodeAt())-65;
        somme += letter
        // console.log(letter);
        // console.log(somme);
    } 
    while (somme>=10) {
        let temp = somme.toString(10) // entier.toString(base)
        somme = 0
        for (let j = 0; j < temp.length ; j++) {
            somme += parseInt(temp.charAt(j))
            // console.log(somme);
        }
        // console.log(somme);
    }
    let temp = somme.toString(10)
    // console.log(temp);
    resultat += temp 
    // console.log(resultat);
    if (resultat === temp) {
        resultat += " "
        // console.log(resultat);
    }
}
console.log(resultat);