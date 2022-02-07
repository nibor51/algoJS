// let mult1
// let mult2
// let mult3
// let mult4
// let mult5
// let mult6
// let mult7
// let mult8
// let mult9
// let mult10
// let mult11
// let mult12
// let mult13
// let mult14
// let mult15
// let mult16
// let mult17
// let mult18
// let mult19
// let mult20


// for (let i=1 ; i<=20 ; i++) {
//     mult1 = 1 * i
//     mult2 = 2 * i
//     mult3 = 3 * i
//     mult4 = 4 * i
//     mult5 = 5 * i
//     mult6 = 6 * i
//     mult7 = 7 * i
//     mult8 = 8 * i
//     mult9 = 9 * i
//     mult10 = 10 * i
//     mult11 = 11 * i
//     mult12 = 12 * i
//     mult13 = 13 * i    
//     mult14 = 14 * i
//     mult15 = 15 * i
//     mult16 = 16 * i
//     mult17 = 17 * i
//     mult18 = 18 * i
//     mult19 = 19 * i
//     mult20 = 20 * i
//     console.log(`${mult1} ${mult2} ${mult3} ${mult4} ${mult5} ${mult6} ${mult7} ${mult8} ${mult9} ${mult10} ${mult11} ${mult12} ${mult13} ${mult14} ${mult15} ${mult16} ${mult17} ${mult18} ${mult19} ${mult20}`);

// }



// on va essayer de simplifier tous ça

var mult = []   //  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
let temp
for (var i=1 ; i<=20 ; i++) {
    for (let n=1 ; n<=20 ; n++ ) {
        temp = n * i ;
        var newLength = mult.push(temp) ;
        
    }
console.log(mult); //affiche tab de l alitération en cours
var resetTab = mult.splice(1,20); //reset tab
}

// console.log(mult); // debug




