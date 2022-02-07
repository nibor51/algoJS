let side = 17
let nbCube = 0
let floor

while (side>=1) {
    floor = Math.pow(side,3)
    nbCube = nbCube + floor
    side = side-2
}
console.log(`Il faudra ${nbCube} petits cubes pour construire le pyramide.`);


let nb_cube = 0
for (let i = 0; i >= 1; i++) {
    nb_cube += nb_cube**3;
    
}
console.log(`Il faudra ${nb_cube} petits cubes pour construire le pyramide.`);