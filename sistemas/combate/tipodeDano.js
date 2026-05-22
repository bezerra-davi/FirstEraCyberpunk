export function calcularCritico(dano){
    let chanceCrit = Math.floor(Math.random() * 100) + 1 // Aqui gera um número aléatorio de 1 até 100
    
    if(chanceCrit <= 10){
        return dano + 5
    }else{
        return dano
    }
    // esse if vai pegar o "chanceCrit" e vê se ele é um número de 1 até 10, caso seja, vai ser acrescentado +5 de dano ao dano inicial, caso não seja um número de 1 a 10, o dano retorna o mesmo 
}

export function danoAleatorio(dano){
     let danoVerdadeiro = Math.floor(Math.random() * 5) + (dano - 2) // aqui vai pegar o dano do personagem e variar ele entre 5 números. Por exemplo, se o dano = 10, o danoVerdadeiro vai variar de 8 a 12
     return danoVerdadeiro
    
}
