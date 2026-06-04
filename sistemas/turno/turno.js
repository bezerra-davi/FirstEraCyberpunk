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

    if (atacante.debuffs && atacante.debuffs.length > 0) {
        for (let i = atacante.debuffs.length - 1; i >= 0; i--) {
            const debuff = atacante.debuffs[i];
            
            atacante.vida -= debuff.danoPorTurno;
            console.log(`${atacante.nome} sofreu ${debuff.danoPorTurno} de dano por estar com ${debuff.nome}!`);
            debuff.duracao--;
            
            if (debuff.duracao <= 0) {
                console.log(`O efeito de ${debuff.nome} em ${atacante.nome} terminou.`);
                atacante.debuffs.splice(i, 1); // remove o debuff da lista
            }
        }

        if (!Status.estarVivo(atacante)) {
            return; 
        }
    }

    const acaoInimigo = Math.floor(Math.random() * 2) + 1;
    if (acaoInimigo === 1) {
        console.log(`${alvo.nome} vai atacar!`);
    } else {
        console.log(`${alvo.nome} vai se defender!`);
        atacante.defendendo = true;
    }
    
    if (atacante.jogador === true) {
        while(true) {
            console.log(`${atacante.nome}, o que você quer fazer?`);
            console.log(`1 - Atacar`);
            console.log(`2 - Habilidade`);
            console.log(`3 - Item`);
            console.log(`4 - Defender`);
            console.log(`5 - Status`);
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
            } else if (escolha === 5){
            Status.mostrarStatus(atacante)
            }
        }
    } else {
        if (acaoInimigo === 1){
            Acoes.atacar(atacante, alvo);
        }
    }
}

export async function iniciarCombate(personagem1, personagem2) {
    console.log(`Combate iniciado.`);
    let contagemTurno = 0;
    let player, inimigo;
    if (personagem1.jogador === true){
        player = personagem1;
        inimigo = personagem2;
    } else {
        player = personagem2;
        inimigo = personagem1;
    }
    while(true){
        contagemTurno++;
        console.log(`Turno: ${contagemTurno}`);
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
