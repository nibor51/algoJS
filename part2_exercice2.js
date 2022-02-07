alert('Bienvenue sur le site des Impôts de la Comté \nVerifions ensemble si vous êtes imposable')
let age = parseInt(prompt('Veuillez saisir votre âge ?'),10)
let genre = prompt('Veuillez indiquez votre genre (homme ou femme) : ')
genre = genre.toLowerCase()

let hommeImposable = genre==='homme' && age>=20
let femmeImposable = genre==='femme' && age>=18 && age<=35

if (hommeImposable || femmeImposable){
    alert('Imposable')
} else alert('Non Imposable')


