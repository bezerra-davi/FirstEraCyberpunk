import * as Turno from '../../sistemas/turno/turno.js';
import * as Status from '../../sistemas/personagem/status.js';
import * as Itens from '../../sistemas/itens/itens.js';
import { lerInput, printLento } from '../../input.js';
import { buscarHabilidade } from '../../sistemas/habilidades/habilidades.js';

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
                return 4;
            }
            break;

        case 2: // (Espada de Aço e Armadura de Placas)
            await printLento(`Você caminhou até o fim da trilha e se deparou com um enorme muro de pedra antiga.`);
            
            if (!personagem.muroSaqueado) {
                await printLento(`Sentado na base do muro, há o esqueleto de um aventureiro antigo...`);
                await printLento(`Não há sinais de violência física. Ele parece ter apenas sentado, desistido e aceitado o fim.`);
                await lerInput(`[Enter para investigar os restos]`);
                
                const espadaAco = Itens.buscarItem(`Espada de Aço`);
                const armaduraPlacas = Itens.buscarItem(`Armadura de Placas`);
                
                Status.pegarItem(personagem, espadaAco);
                Status.pegarItem(personagem, armaduraPlacas);
                
                await printLento(`Você revira os pertences e encontra equipamentos úteis.`);
                await printLento(`Você obteve: Espada de Aço.`);
                await printLento(`Você obteve: Armadura de Placas.`);
                
                personagem.muroSaqueado = true;
            } else {
                await printLento(`O esqueleto do aventureiro continua ali, estático, servindo como um aviso silencioso sobre este lugar.`);
            }
            
            await lerInput(`[Enter para voltar]`);
            return 1;

        case 3: // lago do samurai (Katana e Traje de Ronin)
            await printLento(`Você encontra um lago pacífico. Curiosamente, a água reflete a lua, mesmo sendo dia.`);
            
            if (!personagem.lagoResolvido) {
                await printLento(`No centro do lago raso, há uma pequena ilha com uma belíssima Katana fincada e um traje dobrado.`);
                await printLento(`Ao colocar os pés na água, a temperatura cai drasticamente. Uma névoa fria se ergue e revela o Espírito de um Antigo Espadachim...`);
                await printLento(`Ele não te ataca de imediato. Apenas flutua, encarando a sua alma com olhos profundos e vazios.`);
                await lerInput(`[Enter para decidir o que fazer]`);
                
                console.log(`1 - Curvar-se`);
                console.log(`2 - Avançar em direção à Katana e ao traje`);
                const escolhaLago = parseInt(await lerInput(``));
                
                if (escolhaLago === 1) {
                    // rota pacifica
                    await printLento(`Você fecha os os olhos e se curva respeitosamente diante da entidade.`);
                    await printLento(`O espírito parece surpreso. Ele dá um leve aceno com a cabeça, sorri em paz e se desfaz em fumaça branca.`);
                    await printLento(`A energia fria some, deixando os equipamentos livres.`);
                    
                    const katana = Itens.buscarItem(`Katana`);
                    const trajeRonin = Itens.buscarItem(`Traje de Ronin`);
                    Status.pegarItem(personagem, katana);
                    Status.pegarItem(personagem, trajeRonin);
                    
                    await printLento(`Você obteve: Katana.`);
                    await printLento(`Você obteve: Traje de Ronin.`);
                    personagem.lagoResolvido = true;
                } else {
                    // rota combate (escolha errada)
                    let vitoria;
                    await printLento(`Você ignora a presença da alma e corre em direção aos itens.`);
                    await printLento(`O espírito solta um lamento ecoante cheio de fúria, saca uma lâmina espectral e avança!`);
                    await lerInput(`[Enter para lutar por sua vida]`);
                    
                    
                    const espiritoSamurai = Status.criarPersonagem(`Espírito do Espadachim`, 2000, 0, 2000, 2, 10, false);
                    vitoria = await Turno.iniciarCombate(personagem, espiritoSamurai);
                    
                    if (!vitoria) {
                        await printLento(`O gume frio da lâmina espiritual atravessa seu peito sem encontrar resistência física, mas partindo sua própria alma. O Samurai embainha a espada em silêncio absoluto, deixando você para se tornar apenas mais um sussurro esquecido na névoa...`);
                        return null; 
                    }
                    
                    await printLento(`Com um último golpe, o espírito se dissipa violentamente no ar, deixando as posses físicas para trás.`);
                    
                    const katana = Itens.buscarItem(`Katana`);
                    const trajeRonin = Itens.buscarItem(`Traje de Ronin`);
                    Status.pegarItem(personagem, katana);
                    Status.pegarItem(personagem, trajeRonin);
                    
                    await printLento(`Você obteve: Katana.`);
                    await printLento(`Você obteve: Traje de Ronin.`);
                    personagem.lagoResolvido = true;
                }
            } else {
                await printLento(`As águas do lago voltaram a ficar calmas e os reflexos mágicos sumiram.`);
            }
            
            await lerInput(`[Enter para voltar]`);
            return 1;

        case 4: // clareira do coelho (Rabbit Kick)
            let vitoria;
            await printLento(`Você encontra mais caminho e seguindo por mais um pouco você encontra uma clareira.`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`O lugar parece muito aconchegante, porém você nota que começa a ficar com fome.`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`De repente você encontra um coelho azul e você fica surpreso com a tamanha conveniência.`);
            await lerInput(`[Enter para continuar]`);
            
            const coelho = Status.criarPersonagem(`Coelho Azul`, 4, 0, 1, 1, 4, false);
            vitoria = await Turno.iniciarCombate(personagem, coelho);

            if (!vitoria) {
                await printLento(`Você subestimou a floresta. O que parecia uma criatura inofensiva avança com uma ferocidade irracional. Sua visão escurece no chão frio, enquanto o pequeno animal volta a saltar calmamente sobre o seu corpo...`);
                await lerInput(`[Enter para continuar]`);
                return null; 
            }
            
            const carneCoelho = Itens.buscarItem(`Carne de Coelho`);
            Status.pegarItem(personagem, carneCoelho);
            await printLento(`Você obteve um item: Carne de Coelho!`);
            
            const chuteCoelho = buscarHabilidade(`rabbit kick`);
            Status.aprenderHabilidade(personagem, chuteCoelho);
            
            await printLento(`Ao analisar a agilidade e os chutes precisos da criatura, um instinto desperta em você.`);
            await printLento(`Você aprendeu uma nova habilidade: rabbit kick.`);
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
            
            const maeCoelho = Status.criarPersonagem(`Mãe Coelho Azul`, 14, 0, 3, 1, 6, false);
            vitoria = await Turno.iniciarCombate(personagem, maeCoelho);
            
            if (!vitoria) {
                await printLento(`A fúria territorial da criatura é demais para você. Desabando sem forças, seus olhos se fecham enquanto escuta os rosnados protetores da mãe, ecoando o preço de ter invadido o ninho errado...`);
                await lerInput(`[Enter para continuar]`);
                return null; 
            }

            await printLento(`Você começa a seguir o rastro da mão coelho, até achar um ninho`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`Ao averiguar o ninho, você encontra um Bau com o cadeado destruido`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`você abre o bau e acha uma pedra com um brilho carmesim`);
            
            const pedraVida = Itens.buscarItem(`Health Stone`);
            Status.pegarItem(personagem, pedraVida);
            await printLento(`Você obteve um item: Health Stone!`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`Você volta a explorar a floresta, sem rumo`);
            await lerInput(`[Enter para continuar]`);
            
            return 5;
    }
}
