import * as Turno from '../../sistemas/turno/turno.js';
import * as Status from '../../sistemas/personagem/status.js';
import * as Itens from '../../sistemas/itens/itens.js';
import { lerInput, printLento } from '../../input.js';

export async function executarCenaFloresta(cena, personagem) {
    switch(cena) {
        case 1:
        console.log(`Você se encontra em uma trilha no meio da floresta e fica sem saber o que fazer.`);
        console.log(`1 - Ir para frente`);
        console.log(`2 - Ir para a direita`);
        console.log(`3 - Ir para a esquerda`);
        const escolha = parseInt(await lerInput(``));
        if (escolha === 1){
            return 2;
        }
        else if (escolha === 2){
            return 3;
        }
        else if (escolha === 3){
            return 4;
        }
        case 2:
        console.log(`Você encontrou um muro.`);
        await lerInput(`[Enter para voltar]`);
        return 1;
        case 3:
        console.log(`Você encontra um lago, nele tem alguns peixes, mas nada muito de interessante.`);
        await lerInput(`[Enter para voltar]`);
        return 1;
        case 4:
        console.log(`Você encontra mais caminho e seguindo por mais um pouco você encontra uma clareira.`);
        await lerInput(`[Enter para continuar]`);
        console.log(`O lugar parece muito aconchegante, porém você nota que começa a ficar com fome.`);
        await lerInput(`[Enter para continuar]`);
        console.log(`De repente você encontra um coelho azul e você fica surpreso com a tamanha conveniência.`);
        await lerInput(`[Enter para continuar]`);
        const coelho = Status.criarPersonagem(`Coelho Azul`, 30, 0, 8, 2, 20, false);
        await Turno.iniciarCombate(personagem, coelho);
        const carneCoelho = Itens.buscarItem(`Carne de Coelho`);
        Status.pegarItem(personagem, carneCoelho);
        console.log(`Você obteve um item: Carne de Coelho!`);
        await lerInput(`[Enter para continuar]`);
        return 5;
    }
}