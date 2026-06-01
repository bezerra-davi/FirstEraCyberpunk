export function Roedores(inimigo){
    let chance = Math.floor(Math.random() *2) + 1
    if(inimigo.vida){
    if(chance === 1){
        return 2
    } else {
        return 1
    }
    }
}
