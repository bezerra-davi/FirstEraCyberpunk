export function criarPersonagem(nome, vida, energia, ataque, defesa, velocidade){
    return{
        nome, // string
        vida, // numero
        energia, // numero
        ataque, // numero
        defesa, // numero
        velocidade, // numero
        habilidades: [] // sem habilidades
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

export function aprenderHabilidade(personagem, habilidade) {
    personagem.habilidades.push(habilidade);
}

export function curarVida(personagem, quantidade){
    personagem.vida += quantidade;
}

export function curarEnergia(personagem, quantidade){
    personagem.energia += quantidade;
}
