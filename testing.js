// Exercice MCCXV : Votre programme devra lire un tableau d’entiers.

// La première entrée du tableau est le nombre total de positions sur la table suivie du nombre de changements de positions.

// Ensuite on retrouvera pour n positions:
// un entier représentant le numéro de la personne, qui doit s’installer à cette position.

// Puis  pour  n  changement  de  position
// Il  faut  lire  ensuite  les  changements  exprimés  sous  la  forme  de  deux  entiers  chacun  :  position1  et  position2.

// Un  changement  (position1,  position2)  signifie  que  les  deux personnes qui étaient à ses positions doivent échanger leurs places (les positions sont indexées à partir de 0).

// Vous devrez retourner un tableau d’entier, avec pour chaque position, le numéro de la personne qui s'y trouve une fois tous les changements faits.


// Exemples :  

// Donnée en entrée : [5,3, 1,2,3,4,5, 1,2,1,3,4,0]

// Donnée en sortie : [5,4,2,3,1]

// Evolution des numéros dans l’exemple : 
// Au début : 1,2,3,4,5
// Après le changement (1,2) : 1,3,2,4,5
// Après le changement (1,3) : 1,4,2,3,5
// Après le changement (4,0) : 5,4,2,3,1


let string = [5,3,1,2,3,4,5,1,2,1,3,4,0];


// create function to split array into two arrays, one array with the number of positions and the other with the couple of number of changes
function exercice(array) {
    let position = [];
    let changements = [];
    // create a new array with the positions
    for (let i = 2; i < (array[0]+2); i++) {
        position.push(array[i]);
    };
    // create a new array with the changes
    for (let i = (array[0]+2); i < array.length; i++) {
        changements.push(array[i]);
    };
    // separate the array of changes into array of array content the position of the first person and the position of the second person
    let temp = changements;
    for (let i = 0; i < array[1]; i++) {
        if (i === 0) {
            changements = [[temp[0], temp[1]]];
        } else {
            changements.push([temp[i*2], temp[i*2+1]]);
        };
    };

    let newPositions = position;
    for (let i = 0; i < changements.length; i++) {
        let temp = newPositions[changements[i][0]];
        newPositions[changements[i][0]] = newPositions[changements[i][1]];
        newPositions[changements[i][1]] = temp;
        console.log(newPositions);
    };

    return `Donnée en entrée : ${string}\n${changements.length} changement(s) effectué(s) !\nDonnée en sortie : ${newPositions}`;
}

console.log(exercice(string));