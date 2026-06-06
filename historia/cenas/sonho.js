import { lerInput, printLento } from '../../input.js';
import * as Turno from '../../sistemas/turno/turno.js';
import * as Status from '../../sistemas/personagem/status.js';
import * as Itens from '../../sistemas/itens/itens.js';

export async function executarCenaSonho(cena, personagem) {
    switch(cena) {
    case 14:
        let vitoria;
        await printLento(`Você se encontra em um lugar num túnel subterrâneo...`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Você escuta várias vozes dizendo para você correr...`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Já outras...`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Para você ficar.`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Você decide correr e o tunel parece não acabar . . .`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Você não enxerga o fim e nem o começo`)
        await lerInput(`[Enter para continuar]`);
        await printLento(`Mas uma presença começa a aparecer em seu caminho`)
        await lerInput(`[Enter para continuar]`);
        await printLento(`Uma criatura repleta de sombras, com forma de chacal`)
        await lerInput(`[Enter para continuar]`);
        await printLento(`Você percebe a intenção hostil da criatura`)
        await lerInput(`[Enter para continuar]`);
        await printLento(`As vozes começam a aumentar e sua frequência começa a pertubar o Herói`)
        await lerInput(`[Enter para continuar]`);
        await printLento(`A criatura avança em sua direção, você entra em postura de batalha`)
        const chacal = Status.criarPersonagem(`Chacal, O Principe dos Sonhos`, 2, 25, 9, 0, 8, false)
        vitoria = await Turno.iniciarCombate(personagem, chacal)

        if (!vitoria) {
            await printLento(`Você foi derrotado por ${chacal.nome}`)
            await lerInput(`[Enter para recomeçar]`)
            return null;
        }
        
        await printLento(`${chacal.nome} começa a desaparecer nas sombras`)
        await lerInput(`[Enter para continuar]`)
        await printLento(`As vozes começam a aumentar, um timbre extremamente agudo começa a surgir `)
        await lerInput(`[Enter para continuar]`)
        await printLento(`As vozes fazem você sentir como se sua cabeça fosse explodir`)
        await lerInput(`[Enter para continuar]`)
        await printLento(`Até que...`)
        await printLento(`Você vê duas coisas onde o corpo do Chacal desapareceu`)
        await lerInput(`[Enter para continuar]`);
        await printLento(`Um dente e um olho...`)
        await lerInput(`[Enter para continuar]`)
        console.log(`1 - Olho de Chacal`)
        console.log(`2 - Dente de Chacal`)
        const opcao = parseInt(await lerInput(`Escolha o item: `))

        if(opcao === 1){
            const olhoChacal = Itens.buscarItemExclusivo(`Olho do Chacal`)
            Status.pegarItem(personagem, olhoChacal)
            await printLento(`Você obteve o olho do Chacal`)
            await lerInput(`[Enter para continuar]`)

        } else if(opcao === 2) {
            const denteChacal = Itens.buscarItemExclusivo(`Dente do Chacal`)
            Status.pegarItem(personagem, denteChacal)
            await printLento(`Você obteve o Dente do Chacal`)
            await lerInput(`[Enter para continuar]`)

        }

        await printLento(`Após esse evento, sua consciência começa a se esvair`)
        await lerInput(`[Enter para continuar]`);
        await printLento(`Você acordou.`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Um suspiro pesado escapou quando você acordou.`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Estranho: Aconteceu alguma coisa?`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`O estranho acabara de entrar no seu quarto`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`― Não, nada... Estou bem`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Estranho: Que bom! Deixa eu te apresentar mais da floresta. Vamos?`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`― Certo...`);
        await lerInput(`[Enter para continuar]`);
        console.log(`Vocês vão para uma trilha.`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Na trilha você encontra árvores bem diferentes e alguns animais mais sofisticados.`);
        await printLento(`Mas o que chama mesmo a sua atenção é a distinta atmosfera do local...`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Você não sabe muito bem como descrever, mas... A floresta realmente é algo vivo`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Vocês encontram um lago. `);
        await lerInput(`[Enter para continuar]`);
        await printLento(`A cor da água varia um pouco entre verde água, azul e roxo. Em um rítmo que parece que as cores estão dançando na sua frente.`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Você também avista do lado do lago uma construção que chama sua atenção.`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`― Que lugar é aquele ali?`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Estranho: Aquilo é uma masmorra que guarda algumas coisas não tão belas quanto o restante da floresta.`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Estranho: Não tem nada demais la dentro, não há razão para ir até aquele lugar.`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Estranho: Exceto que . . .`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`O estranho pensa um pouco.`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Estranho: Tinha uma coisa que eu precisava buscar la dentro.`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Estranho: Mas fica impossível de eu ir lá sozinho.`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`― É perigoso lá?`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Estranho: Não sei se perigoso é a palavra certa... Você aceita ir comigo?`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Sua curiosidade sobre o local está maior do que seu sentimento de medo.`);
        console.log(``)
        console.log(`Você decide ir.`)
        console.log(``)
        await lerInput(`[Enter para preparar seus equipamentos]`);

        let preparando = true;
        while (preparando) {
            console.log(`\nMenu de Preparação:`);
            console.log(`1 - Olhar Status Atual`);
            console.log(`2 - Abrir Mochila de Equipamentos`);
            console.log(`3 - Bolsa de Consumíveis`);
            console.log(`4 - Confirmar e Entrar na Masmorra`);
            
            const opcaoPrep = parseInt(await lerInput(`Escolha uma ação: `));

            if (opcaoPrep === 1) {
                console.log(`\nSeus atributos atuais:`);
                Status.mostrarStatus(personagem);
                console.log(`Arma Equipada: ${personagem.armaEquipada ? personagem.armaEquipada.nome : 'Nenhuma'}`);
                console.log(`Armadura Equipada: ${personagem.armaduraEquipada ? personagem.armaduraEquipada.nome : 'Nenhuma'}`);
                await lerInput(`[Enter para voltar]`);
            } 
            
            else if (opcaoPrep === 2) {
                const equipamentos = personagem.itens.filter(function(item) {
                    return item.tipo === 'arma' || item.tipo === 'armadura';
                });

                if (equipamentos.length === 0) {
                    await printLento(`Você não possui armas ou armaduras para equipar na mochila.`);
                } else {
                    console.log(`\n-Equipamentos disponíveis:`);
                    for (let i = 0; i < equipamentos.length; i++) {
                        let detalhe = equipamentos[i].tipo === 'arma' 
                            ? `Ataque +${equipamentos[i].bonusAtaque}` 
                            : `Vida Max +${equipamentos[i].bonusVidaMaxima}, Defesa +${equipamentos[i].bonusDefesa}`;
                        console.log(`${i + 1} - ${equipamentos[i].nome} [${detalhe}]`);
                    }
                    console.log(`0 - Voltar`);
                    
                    const escolhaEquip = parseInt(await lerInput(`Selecione o número do item para equipar: `));
                    if (escolhaEquip > 0 && escolhaEquip <= equipamentos.length) {
                        const itemEscolhido = equipamentos[escolhaEquip - 1];
                        
                        const idx = personagem.itens.findIndex(function(it) {
                            return it.nome === itemEscolhido.nome;
                        });
                        if (idx !== -1) {
                            personagem.itens.splice(idx, 1);
                        }
                        
                        Status.equiparItem(personagem, itemEscolhido);
                        await lerInput(`[Enter para continuar]`);
                    }
                }
            } 
            
            else if (opcaoPrep === 3) {
                const consumiveis = personagem.itens.filter(function(item) {
                    return item.tipo === 'consumivel';
                });

                if (consumiveis.length === 0) {
                    await printLento(`Você não tem nenhum consumível na mochila.`);
                } else {
                    console.log(`\nSeus consumíveis:`);
                    for (let i = 0; i < consumiveis.length; i++) {
                        console.log(`${i + 1} - ${consumiveis[i].nome} (Cura Vida: ${consumiveis[i].cura} | Cura Energia: ${consumiveis[i].curaEnergia})`);
                    }
                    console.log(`0 - Voltar`);
                    
                    const escolhaCons = parseInt(await lerInput(`Selecione o consumível para usar: `));
                    if (escolhaCons > 0 && escolhaCons <= consumiveis.length) {
                        const itemEscolhido = consumiveis[escolhaCons - 1];
                        
                        const idx = personagem.itens.findIndex(function(it) {
                            return it.nome === itemEscolhido.nome;
                        });
                        if (idx !== -1) {
                            personagem.itens.splice(idx, 1);
                        }
                        
                        if (itemEscolhido.cura > 0) {
                            Status.curarVida(personagem, itemEscolhido.cura);
                        }
                        if (itemEscolhido.curaEnergia > 0) {
                            Status.curarEnergia(personagem, itemEscolhido.curaEnergia);
                        }
                        
                        await printLento(`Você consumiu ${itemEscolhido.nome} com sucesso!`);
                        await lerInput(`[Enter para continuar]`);
                    }
                }
            } 
            
            else if (opcaoPrep === 4) {
                preparando = false;
            } 
            
            else {
                console.log(`Opção inválida.`);
            }
        }

        return 15;
    }
}
