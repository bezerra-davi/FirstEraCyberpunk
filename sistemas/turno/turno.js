import * as Status from '../personagem/status.js';
import * as Acoes from '../combate/acoes.js';
import * as Habilidades from '../habilidades/habilidades.js';
import { lerInput } from '../../input.js';

export async function recompensaHabilidade(personagem) {
    const opcoes = Habilidades.escolherHabilidades();
    console.log(`Escolha uma habilidade:`);
    console.log(`1 - ${opcoes[0].nome}`);
    console.log(`2 - ${opcoes[1].nome}`);
    console.log(`3 - ${opcoes[2].nome}`);
    const escolha = parseInt(await lerInput(`Digite 1, 2 ou 3:`));
    Status.aprenderHabilidade(personagem, opcoes[escolha - 1]);
    console.log(`${opcoes[escolha - 1].nome} aprendida.`);
}

export function quemAgePrimeiro(personagem1, personagem2){
    if (personagem1.velocidade >= personagem2.velocidade){
        return personagem1;
    } else{
        return personagem2;
    }
}

export function verificarFimCombate(personagem1, personagem2){
    if (!Status.estarVivo(personagem1)){
        return true;
    } else if (!Status.estarVivo(personagem2)){
        return true;
    } else{
        return false;
    }
}

export async function executarTurno(atacante, alvo){
    if (atacante.jogador === true) {
        while(true) {
            console.log(`${atacante.nome}, o que você quer fazer?`);
            console.log(`1 - Atacar`);
            console.log(`2 - Habilidade`);
            console.log(`3 - Item`);
            console.log(`4 - Defender`);
            const escolha = parseInt(await lerInput(`Digite o número da ação:`));
            if (escolha === 1){
                Acoes.atacar(atacante, alvo);
                break;
            } else if (escolha === 2){
                if (atacante.habilidades.length === 0){
                    console.log(`Você não tem habilidades!`);
                } else {
                    console.log(`Habilidades disponíveis:`);
                    for (let i = 0; i < atacante.habilidades.length; i++){
                        console.log(atacante.habilidades[i].nome);
                    }
                    const nomeHabilidade = await lerInput(`Qual habilidade?`);
                    Acoes.usarHabilidade(atacante, nomeHabilidade, alvo);
                    break;
                }
            } else if (escolha === 3){
                if (atacante.itens.length === 0){
                    console.log(`Você não tem itens!`);
                } else {
                    console.log(`Itens disponíveis:`);
                    for (let i = 0; i < atacante.itens.length; i++){
                        console.log(atacante.itens[i].nome);
                    }
                    const nomeItem = await lerInput(`Qual item?`);
                    Acoes.usarItem(atacante, nomeItem);
                    break;
                }
            } else if (escolha === 4){
                atacante.defendendo = true;
                console.log(`${atacante.nome} está se defendendo!`);
                break;
            }
        }
    } else {
        const acao = Math.floor(Math.random() * 2) + 1;
        console.log(`${atacante.nome} está agindo...`);
        if (acao === 1){
            console.log(`${atacante.nome} atacou!`);
            Acoes.atacar(atacante, alvo);
        } else {
            console.log(`${atacante.nome} se defendeu!`);
            const danoFinal = Acoes.defender(alvo.ataque);
            Status.tomarDanoDefendido(atacante, danoFinal);
        }
    }
}

export async function iniciarCombate(personagem1, personagem2) {
    console.log(`Combate iniciado.`);
    let player, inimigo;
    if (personagem1.jogador === true){
        player = personagem1;
        inimigo = personagem2;
    } else {
        player = personagem2;
        inimigo = personagem1;
    }
    while(true){
    await executarTurno(player, inimigo);
    player.defendendo = false;
    inimigo.defendendo = false;
    if (verificarFimCombate(player, inimigo)){
        console.log(`${inimigo.nome} foi derrotado!`);
        break;
    }
    await executarTurno(inimigo, player);
    player.defendendo = false;
    inimigo.defendendo = false;
    if (verificarFimCombate(player, inimigo)){
        console.log(`${player.nome} foi derrotado!`);
        break;
    }
}
    await recompensaHabilidade(player);
}