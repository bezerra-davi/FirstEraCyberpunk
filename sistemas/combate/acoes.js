import * as Status from '../personagem/status.js';   // isso aqui e pra pegar as funcoes la do status.js
import * as Habilidades from '../habilidades/habilidades.js';
import * as Itens from '../itens/itens.js';
import * as TipoDeDano from '../combate/tipodeDano.js';

export function atacar(atacante, alvo) {
    let dano = TipoDeDano.danoAleatorio(atacante.ataque);
    dano = TipoDeDano.calcularCritico(dano);
    Status.tomarDano(alvo, dano);
}

export function defender(danoRecebido){
    let danoDefendido = Math.floor(Math.random() * 30) + 1
    let defesa = danoRecebido - danoDefendido
    if(defesa < 0){
    return defesa = 0
    } else{
    return defesa
    }
}

export function usarHabilidade(personagem, nomeHabilidade, alvo){
    const habilidade = Habilidades.buscarHabilidade(nomeHabilidade);
    Status.gastarEnergia(personagem, habilidade.custo);
    Status.tomarDano(alvo, habilidade.dano);
}

export function usarItem(personagem, nomeItem){
    const item = Itens.buscarItem(nomeItem);
    Status.curarVida(personagem, item.cura);
    Status.curarEnergia(personagem, item.curaEnergia);
}
