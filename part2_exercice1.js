

let temp = prompt("Quel est la temperature de l'eau ?")

if (temp <= 0) {
    alert('L’état de l’eau est solide')
}
else if (temp>0 && temp<100) {
    alert('L’état de l’eau sera liquide')
}
else {
    alert('L’état de l’eau est gazeux')
}