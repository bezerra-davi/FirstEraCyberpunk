export function criarPersonagem(nome, vida, energia, ataque, defesa, velocidade, jogador){
    return{
        nome, // string
        vida, // numero
        vidaMaxima: vida,
        energia, // numero
        energiaMaxima: energia,
        ataque, // numero
        defesa, // numero
        velocidade, // numero
        jogador,
        defendendo: false,  // estado de defesa
        habilidades: [], // sem habilidades
        itens: [],
        debuffs: [],
        armaEquipada: null,
        armaduraEquipada: null
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
        return true;
    } else {
        console.log(`${personagem.nome} não tem energia suficiente!`);
        return false;
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

export function pegarItem(personagem, item) {
    personagem.itens.push(item);
}

export function curarVida(personagem, quantidade){
    personagem.vida += quantidade;
    if (personagem.vida > personagem.vidaMaxima) {
        personagem.vida = personagem.vidaMaxima;
    }
}

export function curarEnergia(personagem, quantidade){
    personagem.energia += quantidade;
    if (personagem.energia > personagem.energiaMaxima) {
        personagem.energia = personagem.energiaMaxima;
    }
}

export function mostrarStatus(personagem){
    console.log(`STATUS:`);
    console.log(`Vida: ${personagem.vida} / ${personagem.vidaMaxima}`);
    console.log(`Energia: ${personagem.energia} / ${personagem.energiaMaxima}`);
    console.log(`Ataque: ${personagem.ataque}`);
    console.log(`Defesa: ${personagem.defesa}`);
    console.log(`Velocidade: ${personagem.velocidade}`);
}

export function restaurarStatus(personagem) {
    personagem.vida = personagem.vidaMaxima;
    personagem.energia = personagem.energiaMaxima;
    personagem.debuffs = [];
}

export function equiparItem(personagem, equipamento) {
    const indexItem = personagem.itens.indexOf(equipamento);
    if (indexItem > -1) {
        personagem.itens.splice(indexItem, 1);
    }
    if (equipamento.tipo === `arma`) {
        if (personagem.armaEquipada !== null) {
            personagem.ataque -= personagem.armaEquipada.bonusAtaque;
            personagem.itens.push(personagem.armaEquipada);
            console.log(`Você guardou ${personagem.armaEquipada.nome} na mochila.`);
        }
        
        personagem.armaEquipada = equipamento;
        personagem.ataque += equipamento.bonusAtaque;
        console.log(`Você equipou ${equipamento.nome}. Seu ataque subiu para ${personagem.ataque}.`);
    } 
    
    else if (equipamento.tipo === `armadura`) {
        if (personagem.armaduraEquipada !== null) {
            personagem.vidaMaxima -= personagem.armaduraEquipada.bonusVidaMaxima;
            personagem.defesa -= personagem.armaduraEquipada.bonusDefesa;
            
            if (personagem.vida > personagem.vidaMaxima) {
                personagem.vida = personagem.vidaMaxima;
            }
            
            personagem.itens.push(personagem.armaduraEquipada);
            console.log(`Você guardou ${personagem.armaduraEquipada.nome} na mochila.`);
        }
        
        personagem.armaduraEquipada = equipamento;
        personagem.vidaMaxima += equipamento.bonusVidaMaxima;
        personagem.defesa += equipamento.bonusDefesa;
        
        console.log(`Você vestiu ${equipamento.nome}. Vida máxima subiu para ${personagem.vidaMaxima} e defesa para ${personagem.defesa}.`);
    }
}