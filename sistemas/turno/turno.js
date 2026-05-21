import * as Status from './personagem/status.js';
import * as Acoes from './combate/acoes.js';

export function quemAgePrimeiro(personagem1, personagem2){      // se empatar o personagem1 vai sempre ser o primeiro
    if (personagem1.velocidade >= personagem2.velocidade){
        return personagem1;
    } else{
        return personagem2;
    }
}

export function verificarFimCombate(personagem1, personagem2){
    if (!Status.estarVivo(personagem1)){
        console.log(`${personagem1.nome} foi derrotado`);
        return true;
    } else if (!Status.estarVivo(personagem2)){
        console.log(`${personagem2.nome} foi derrotado`);
        return true;
    } else{
        return false;
    }
}

export function executarTurno(atacante, alvo){
    console.log(`${atacante.nome}, o que você quer fazer?`);
    console.log(`1 - Atacar`);
    console.log(`2 - Habilidade`);
    console.log(`3 - Item`);
    console.log(`4 - Defender`);

    const escolha = parseInt(prompt(`Digite o número da ação:`));

    if (escolha === 1){
        Acoes.atacar(atacante, alvo);
    } else if (escolha === 2){
        console.log(`Habilidades disponíveis:`);
    for (let i = 0; i < atacante.habilidades.length; i++){
        console.log(atacante.habilidades[i].nome);
    }
        const nomeHabilidade = prompt(`Qual habilidade?`);
        Acoes.usarHabilidade(atacante, nomeHabilidade, alvo);
    } else if (escolha === 3){
        console.log(`Itens disponíveis:`);
    for (let i = 0; i < atacante.itens.length; i++){
        console.log(atacante.itens[i].nome);
    }
        const nomeItem = prompt(`Qual item?`);
        Acoes.usarItem(atacante, nomeItem);
    } else if (escolha === 4){
    const danoFinal = Acoes.defender(alvo.ataque);
    Status.tomarDanoDefendido(atacante, danoFinal);
    }

    verificarFimCombate(atacante, alvo);
}

export function iniciarCombate(personagem1, personagem2) {
    console.log(`Combate iniciado.`);

    while(!verificarFimCombate(personagem1, personagem2)){
        const primeiro = quemAgePrimeiro(personagem1, personagem2);
        const segundo = primeiro === personagem1 ? personagem2 : personagem1;

        executarTurno(primeiro, segundo);

        if (!verificarFimCombate(personagem1, personagem2)){
            executarTurno(segundo, primeiro);
        }
    }
}
