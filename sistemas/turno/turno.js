import * as Status from '../personagem/status.js';
import * as Acoes from '../combate/acoes.js';
import * as Habilidades from '../habilidades/habilidades.js';
import { lerInput } from '../../input.js';

export async function recompensaHabilidade(personagem) {
    const opcoes = Habilidades.escolherHabilidades(personagem); 

    if (opcoes.length === 0) {
        console.log(`Você não tem mais habilidades para aprender.`);
        return; 
    }

    console.log(`Escolha uma habilidade:`);

    for (let i = 0; i < opcoes.length; i++) {
        console.log(`${i + 1} - ${opcoes[i].nome}`);
    }
    
    const escolha = parseInt(await lerInput(`Digite o número (1 a ${opcoes.length}): `));
    
    if (escolha >= 1 && escolha <= opcoes.length) {
        Status.aprenderHabilidade(personagem, opcoes[escolha - 1]);
        console.log(`Você aprendeu a habilidade: ${opcoes[escolha - 1].nome}.`);
    } else {
        console.log(`Escolha inválida. Ajudei você a escolher, espero que goste da habilidade: ${opcoes[0].nome}.`);
        Status.aprenderHabilidade(personagem, opcoes[0]);
    }
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
    atacante.defendendo = false;

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
                        console.log(`${i + 1} - ${atacante.habilidades[i].nome}`);
                    }
                    
                    const escolhaHab = parseInt(await lerInput(`Digite o número da habilidade:`));
                    const habilidadeEscolhida = atacante.habilidades[escolhaHab - 1];
                    
                    if (habilidadeEscolhida) {
                        Acoes.usarHabilidade(atacante, habilidadeEscolhida.nome, alvo);
                        break;
                    } else {
                        console.log(`Você não tem uma habilidade na posição ${escolhaHab}. Tente novamente.`);
                    }
                }
            } else if (escolha === 3){
                if (atacante.itens.length === 0){
                    console.log(`Você não tem itens!`);
                } else {
                    console.log(`Itens disponíveis:`);
                    for (let i = 0; i < atacante.itens.length; i++){
                        console.log(`${i + 1} - ${atacante.itens[i].nome}`);
                    }
                    
                    const escolhaItem = parseInt(await lerInput(`Digite o número do item:`));
                    const itemEscolhido = atacante.itens[escolhaItem - 1];
                    
                    if (itemEscolhido) {
                        if (itemEscolhido.tipo === 'consumivel') {
                            Acoes.usarItem(atacante, itemEscolhido.nome);
                        } else if (itemEscolhido.tipo === 'arma' || itemEscolhido.tipo === 'armadura') {
                            Status.equiparItem(atacante, itemEscolhido);
                        } else {
                            console.log(`Este item não pode ser usado no momento.`);
                        }
                        
                        atacante.itens.splice(escolhaItem - 1, 1);
                        break;
                    } else {
                        console.log(`Você não tem um item na posição ${escolhaItem}. Tente novamente.`);
                    }
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
        if (atacante.proximaAcao === 1) {
            console.log(`${atacante.nome} executa um ataque!`);
            Acoes.atacar(atacante, alvo);
        } else {
            console.log(`${atacante.nome} levanta sua guarda e se defende!`);
            atacante.defendendo = true;
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
        console.log(`\n--- TURNO: ${contagemTurno} ---`);

        inimigo.proximaAcao = Math.floor(Math.random() * 2) + 1;
        
        if (inimigo.proximaAcao === 1) {
            console.log(`${inimigo.nome} está se preparando para atacar!`);
        } else {
            console.log(`${inimigo.nome} assumiu uma postura de defesa!`);
        }

        // TURNO DO PLAYER
        await executarTurno(player, inimigo);
        if (verificarFimCombate(player, inimigo)){
            console.log(`${inimigo.nome} foi derrotado!`);
            break;
        }
        
        // TURNO DO INIMIGO
        await executarTurno(inimigo, player);
        if (verificarFimCombate(player, inimigo)){
            console.log(`${player.nome} foi derrotado!`);
            break;
        }
    }
    await recompensaHabilidade(player);
    Status.restaurarStatus(player);
}
