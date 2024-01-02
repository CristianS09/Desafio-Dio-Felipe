// Nome do herói
let nomeHeroi = ""

// Xp do herói
let xp = 2001


switch (xp) {
    case 1000:
        xp = "Ferro"
        break

    case 1001:
    case 2000:
        xp = "Bronze"
        break

    case 2001:
    case 5000:
        xp = "Prata"
        break

    case 5001:
    case 7000:
        xp = "Ouro"
        break

    case 7001:
    case 8000:
        xp = "Platina"
        break

    case 8001:
    case 9000:
        xp = "Ascedente"
        break
    case 9001:
    case 10000:
        xp = "Imortal"
        break
}

if(xp >= 10001){
     xp = "Imortal"
}




console.log(`O heroi ${nomeHeroi} está no nível ${xp} `)