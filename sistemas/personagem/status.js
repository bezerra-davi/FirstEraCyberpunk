export function criarPersonagem(nome, vida, energia, ataque, defesa, velocidade, jogador){
    return{
        nome, // string
        vida, // numero
        energia, // numero
        ataque, // numero
        defesa, // numero
        velocidade, // numero
        habilidades: [], // sem habilidades
        itens: [],
        jogador,
        defendendo: false  // estado de defesa
    };
}

// exemplo pra criar o personagem: let Davi = criarPersonagem(`Davi`, 100, 25, 10, 12, 6)

export function tomarDano(personagem, dano){
    if (personagem.defendendo === true){
    let danoDefendido = Math.floor(Math.random() * 30) + 1;
    dano = dano - danoDefendido;
    if (dano < 0){
    dano = 0;
    }
    }
    if (dano > personagem.defesa){
        let danoReal = dano - personagem.defesa;
        personagem.vida -= danoReal;
        return danoReal;
    } else{
        console.log(`${personagem.nome} bloqueou o ataque.`);
        return 0;
    }
}

export function gastarEnergia(personagem, custo){
    if (personagem.energia >= custo){
        personagem.energia -= custo;
    }
}

export function tomarDanoDefendido(personagem, dano){
    personagem.vida -= dano;
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

export function pegarItem(personagem, item) {
    personagem.itens.push(item);
}

export function curarVida(personagem, quantidade){
    personagem.vida += quantidade;
}

export function curarEnergia(personagem, quantidade){
    personagem.energia += quantidade;
}
