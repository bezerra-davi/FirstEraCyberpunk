import * as Status from '../personagem/status.js';   // isso aqui e pra pegar as funcoes la do status.js
import * as Habilidades from '../habilidades/habilidades.js';
import * as Itens from '../itens/itens.js';
import * as TipoDeDano from '../combate/tipodeDano.js';
import { printLento, esperar } from '../../input.js';

export function atacar(atacante, alvo) {
    let dano = TipoDeDano.danoAleatorio(atacante.ataque);
    dano = TipoDeDano.calcularCritico(dano);
    const danoReal = Status.tomarDano(alvo, dano);
    if (danoReal > 0){
        console.log(`${atacante.nome} causou ${danoReal} de dano em ${alvo.nome}!`);
    }
}

//export function defender(danoRecebido){
//    let danoDefendido = Math.floor(Math.random() * danoRecebido) + 1
//    let defesa = danoRecebido - danoDefendido
//    if(defesa < 0){
//    return defesa = 0
//    } else{
//    return defesa
//    }
//}

export async function usarHabilidade(personagem, nomeHabilidade, alvo){
    const habilidade = Habilidades.buscarHabilidade(nomeHabilidade);
    
    if (!habilidade) {
        console.log(`A habilidade "${nomeHabilidade}" não foi encontrada!`);
        return;
    }

    const temEnergia = Status.gastarEnergia(personagem, habilidade.custo);
    if (temEnergia === false) {
        return; 
    }

    let danoFinal = habilidade.dano;
    let debuffDano = habilidade.debuff ? habilidade.debuff.danoPorTurno : 0;

    if (habilidade.nome.toLowerCase() === 'ishin cut' && personagem.armaEquipada && personagem.armaEquipada.categoria === 'katana') {
        await esperar(2000);
        await printLento(`\n "Hesitation is defeat..."`);
        await esperar(1000);
        await printLento(`Ishin Cut foi fortalecido.`);
        await esperar(1000);
        
        danoFinal += 10; 
        debuffDano += 2; 
    }

    const danoReal = Status.tomarDano(alvo, danoFinal);
    
    if (danoReal > 0){
        console.log(`\n${personagem.nome} usou ${habilidade.nome} e causou ${danoReal} de dano em ${alvo.nome}!`);
    }
    
    if (habilidade.debuff) {
        const novoDebuff = {
            nome: habilidade.debuff.nome,
            danoPorTurno: debuffDano,
            duracao: habilidade.debuff.duracao
        };
        
        alvo.debuffs.push(novoDebuff);
        console.log(`${alvo.nome} sofreu o efeito colateral: ${novoDebuff.nome}!`);
    }
}

export function usarItem(personagem, nomeItem){
    const item = Itens.buscarItem(nomeItem);
    Status.curarVida(personagem, item.cura);
    Status.curarEnergia(personagem, item.curaEnergia);
    console.log(`${personagem.nome} usou ${item.nome} e recuperou ${item.cura} de vida e ${item.curaEnergia} de energia!`);
}
