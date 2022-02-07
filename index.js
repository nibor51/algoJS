// Déclarer une variable
var prenom
let nom
const PI = 3.14   // constante

// Affecter une valeur à une variable
prenom = 'Robin'
nom = "Jonval"

// débuguer une variable
console.log(prenom)
// débuguer plusieurs variables
console.log(prenom, nom, PI)

// Opérateurs arithmetiques

let a = 3
let b = 4

//  Addition
console.log(a + b) // 7

// Soustraction
console.log(a - b) // -1

// Multiplication
console.log(a * b) // 12

// Division 
console.log(a / b) // 0.75

// Modulo retourne le reste d'une division
console.log(21 % 3) // 0
console.log(10 % 3) // 1
console.log(80 % 9) // 8
console.log(a % b) // 3

// concaténation (ajouter une chaîne de caractères à une autre chaîne de caractères)
let phrase = "Bonjour je m'appelle Robin"
let phrase2 = 'Bonjour je m\'appelle Nibor'
let phrase3 = "Mon premier paragraphe \n Mon second paragraphe" // \n permet de faire un retour à la ligne
let tab = "Mes films préférés :\n\t- Goonies\n\t- Old Boy"

console.log(tab)

let hello = "Bonjour je suis " + prenom
// ATTENTION lors de la concaténation avec un nombre et une chaîne de caractères, l'addition ne sera pas utilisé   ex: "2" + 2 sera égale à 22
// Si on souhaite obtenir une somme alors il faudra parser la chaîne de caractères avec la fonction parseInt(string, base)
console.log("2" + 2) // 22
console.log( parseInt("2", 10) + 2 ) // 4

// Concaténation avec les backquote (alt gr + 7) `
let greeting = `Bonjour je m'appelle ${prenom}`

console.log(greeting)

