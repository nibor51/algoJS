

alert('Bienvenue sur voyance.clock\nLe site qui prédit l\'heure qu\'il sera dans une seconde!')
alert(`Indiquez dans les prochaines boites l'heure actuelle en commence par les heures puis les minutes puis les secondes`)
let h = parseInt(prompt('Heure : '),10)
let m = parseInt(prompt('Minute : '),10)
let s = parseInt(prompt('Seconde : '),10)
s++

if (s===60){
    s= 0
    m++
    if (m===60){
        m= 0
        h++
        if (h===24){
            h= 0
        }
    }
} 

h = h === 0 ? '00' : h
m = m === 0 ? '00' : m
s = s === 0 ? '00' : s

alert(`Dans une seconde il sera ${h} : ${m} : ${s}`)
