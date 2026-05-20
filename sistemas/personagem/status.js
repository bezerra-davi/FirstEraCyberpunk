export function criarPersonagem(nome, vida, energia, ataque, defesa, velocidade){
    return{
        nome, // string
        vida, // numero
        energia, // numero
        ataque, // numero
        defesa, // numero
        velocidade // numero
    };
}

// exemplo pra criar o personagem: let Davi = criarPersonagem(`Davi`, 100, 25, 10, 12, 6)

export function tomarDano(personagem, dano){
    if (dano > personagem.defesa){
        let danoReal = dano - personagem.defesa;
        personagem.vida -= danoReal;
    } else{
        console.log(`${personagem.nome} bloqueou o ataque.`);
    }
}

export function gastarEnergia(personagem, custo){
    if (personagem.energia >= custo){
        personagem.energia -= custo;
    }
}

export function estarVivo(personagem){
    if (personagem.vida > 0){
        return true;
    } else{
        return false;
    }
}
