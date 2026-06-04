import * as Turno from '../../sistemas/turno/turno.js';
import * as Status from '../../sistemas/personagem/status.js';
import * as Itens from '../../sistemas/itens/itens.js';
import { lerInput, printLento } from '../../input.js';

export async function executarCenaFloresta(cena, personagem) {
    switch(cena) {
        case 1:
        await printLento(`Você se encontra em uma trilha no meio da floresta e fica sem saber o que fazer.`);
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
            return 13;  // mudança para teste
        }
        case 2:
        await printLento(`Você encontrou um muro.`);
        await lerInput(`[Enter para voltar]`);
        return 1;
        case 3:
        await printLento(`Você encontra um lago, nele tem alguns peixes, mas nada muito de interessante.`);
        await lerInput(`[Enter para voltar]`);
        return 1;
        case 4:
        await printLento(`Você encontra mais caminho e seguindo por mais um pouco você encontra uma clareira.`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`O lugar parece muito aconchegante, porém você nota que começa a ficar com fome.`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`De repente você encontra um coelho azul e você fica surpreso com a tamanha conveniência.`);
        await lerInput(`[Enter para continuar]`);
        const coelho = Status.criarPersonagem(`Coelho Azul`, 4, 0, 1, 1, 3, false);
        await Turno.iniciarCombate(personagem, coelho);
        const carneCoelho = Itens.buscarItem(`Carne de Coelho`);
        Status.pegarItem(personagem, carneCoelho);
        await printLento(`Você obteve um item: Carne de Coelho!`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Após pegar a carne, o herói começa a sentir algo se aproximando.`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Algo grande, movendo-se em alta velocidade`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`A criatura surge. Sua fúria é tão intensa que os insetos da floresta se afastam`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Um coelho de pelagem azul, com quase dois metros e meio de altura, dentes serrilhados e olhos vermelhos amedrontadores`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`A mãe coelho, tomada pela fúria pela morte de seu filhote, e o herói assumem posições de combate`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Seus olhares se cruzam. O combate começou`);
        const maeCoelho = Status.criarPersonagem(`Mãe Coelho Azul`, 20, 0, 5, 2, 6, false);
        await Turno.iniciarCombate(personagem, maeCoelho);
        await printLento(`Você começa a seguir o rastro da mão coelho, até achar um ninho`)
        await lerInput(`[Enter para continuar]`)
        await printLento(`Ao averiguar o ninho, você encontra um Bau com o cadeado destruido`)
        await lerInput(`[Enter para continuar]`)
        await printLento(`você abre o bau e acha uma pedra com um brilho carmesim`)
        const pedraVida = Itens.buscarItem(`Health Stone`)
        Status.pegarItem(personagem, pedraVida)
        await printLento(`Você obteve um item: Health Stone!`)
        await lerInput(`[Enter para continuar]`)
        await printLento(`Você volta a explorar a floresta, sem rumo`)
        await lerInput(`[Enter para continuar]`)
        
        

        return 5;
    }
}
