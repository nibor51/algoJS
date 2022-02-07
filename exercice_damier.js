// résulat attendu 
// const chessboard = [
//     [B,W,B,W,B,W,B,W]
//     [W,B,W,B,W,B,W,B]
//     [B,W,B,W,B,W,B,W]
//     [W,B,W,B,W,B,W,B]
//     [B,W,B,W,B,W,B,W]
//     [W,B,W,B,W,B,W,B]
//     [B,W,B,W,B,W,B,W]
//     [W,B,W,B,W,B,W,B]
// ]

let chessboard = []
let firstline = []
let secondline = []

for (let i = 0; i < 4; i++) {
    newLength = firstline.push('B')
    newLength = firstline.push('W')
    newLength = secondline.push('W')
    newLength = secondline.push('B')
}
for (let i = 0; i < 4; i++) {
    console.log(firstline.join(" , "))
    console.log(secondline.join(" , "))
}

console.log("")


for (let i = 0; i < 4; i++) {
    let string = ""
    let string2 = ""
    for (let j = 0; j < 4; j++) {
        string += "B, W, "
        string2 += "W, B, "
    }
    console.log(string);
    console.log(string2);
}
