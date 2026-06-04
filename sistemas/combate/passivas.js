export function Roedores(inimigo){
    let chance = Math.floor(Math.random() *2) + 1
    if(inimigo.vida < 6){
    if(chance === 1){
        return 2
    } else {
        return 1
    }
    }
}

export function blasfemia(inimigo){
    let chance = Math.floor(Math.random() * 100) + 1
    if(inimigo.vida < 30){
    if(chance < 20){
        return 8
    } else {
        return 4
    }
  }
}
