import { lerInput, printLento } from '../../input.js';

export async function executarCenaDentroCabana(cena, personagem) {
    switch(cena) {
        case 6:
            await printLento(`Dono da Cabana: Bem vindo, essa é a minha cabana!`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`Agora que você entra você começa a reparar um pouco mais nos detalhes mágicos, tem algumas coisas interessantes, porém nada muito além do que você espera que tenha em uma cabana`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`Dono da Cabana: O que você tem em mente?`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`― To pensando no que eu estou vendo . . . `);
            await lerInput(`[Enter para continuar]`);
            await printLento(`Você vê um relógio, cujo os dígitos estão em alguma grafia que você não entende.`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`Você sabe que é um relógio, pois parece que o que seriam os 'digitos' mudam em intervalos de tempo muito bem estabelecidos.`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`Parece ter uns 11 dígitos de 'números'.`);
            await printLento(`Você decide não perguntar sobre isso.`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`― Aqui parece ser um lugar legal.`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`Dono da Cabana: Eu te disse!!`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`― O que você faz por aqui geralmente?`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`Dono da Cabana: Eu não tenho uma rotina fixa, então eu geralmente não estou tão ocupado, mas eu fico apenas apreciando a floresta como um todo`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`― Entendi... Quero dar mais uma olhada para entender um pouco mais daqui, tudo bem?`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`Dono da Cabana: Tranquilo! Eu vou ir dormir agora, tem outro quarto ali do lado. Fique a vontade.`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`― Certo, obrigado`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`Obviamente você não vai ficar comportado.`);
            await lerInput(`[Enter para continuar]`);
            return 7;
        case 7: {
            await printLento(`Você vê 3 coisas que chamam atenção ao seu olhar, o que quer investigar primeiro?`);
            console.log(`1 - Olhar os livros na estante`);
            console.log(`2 - Olhar para o relógio`);
            console.log(`3 - Olhar o diário do Estranho`);
            const escolha = parseInt(await lerInput(``));
            if (escolha === 1){
                return 8; // estante
            } else if (escolha === 2){
                return 9; // relogio
            } else if (escolha === 3){
                return 10; // diario
            }
        }
        
        case 8: // estante
            await printLento(`Na estante há alguns títulos interessantes... Todos eles tem a autoria de um tal de...   `);
            await printLento(`...Pygma?`);
            await printLento(`Que nome estranho.`);
            await lerInput(`[Enter para continuar]`);
            return 7;
            
        case 9: // relogio
            await printLento(`Os números roxos flutuam para frente meio borrados e mudando sua forma suavemente, realmente é mágico e muito bonito.`);
            await printLento(`Você se pergunta se algum dia teria dinheiro para comprar um desse se existisse fora da floresta...`);
            await printLento(`Você nota uns 7 dígitos diferentes, parecem todos aleatórios.`);
            await printLento(`Talvez isso também use uma base numérica?`);
            await printLento(`Você não sabe.`);
            await lerInput(`[Enter para continuar]`);
            return 7;
        case 10: { // diario
            await printLento(`O diário é bem extenso, parece ter umas 500 páginas.`);
            console.log(`1 - Abrir na primeira página`);
            console.log(`2 - Abrir na última página`);
            const escolha = parseInt(await lerInput(``));
            if (escolha === 1){
                return 11; // primeira página
            } else if (escolha === 2){
                return 12; // ultima página
            }
        }
        case 11: // primeira página
            console.log(`Primeira Página:`)
            await printLento(`Hoje adentrei mais o bosque para fazer mais progresso no projeto...`);
            await printLento(`... Acontece que eu não estou conseguindo mais .  .   . `);
            await lerInput(`[Enter para continuar]`);
            return 10;
        case 12: // ultima página
            console.log(`Última Página:`)
            await printLento(`Hoje o coelho me contou que chegaria uma visita para mim!`);
            await printLento(`Finalmente depois de tanto tempo...`);
            await printLento(`Tenho certeza que ele amará permanecer aqui na floresta, afinal . . . `);
            await printLento(`Ela é incrível!`);
            await lerInput(`[Enter para continuar]`);
            return 13;
        case 13:
            console.log(`Você escuta um barulho e decide fechar o diário rapidamente.`)
            await lerInput(`[Enter para continuar]`);
            await printLento(`Era justamente o estranho.    `);
            await printLento(`Ele foi tomar uma água e parece que nem notou sua presença.`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`Você então decide não explorar mais nada e ficar na sua.`);
            await lerInput(`[Enter para continuar]`);
            console.log(`Você entra em seu quarto designado.`)
            await lerInput(`[Enter para continuar]`);
            await printLento(`caminhando até a cama, você tropeça em uma tabua solta no chão`)
            await lerInput(`[Enter para continuar]`);
            await printLento(`Você solta um suspiro de dor e fica irritado, abaixando-se para encaixar a tabua no chão`)
            await lerInput(`[Enter para continuar]`);
            await printLento(`Chegando mais perto, você percebe uma caixa parcialmente enterrada. Você decide pegá-la e abri-la.`)
            await lerInput(`[Enter para continuar]`);
            await printLento(`Ao abri-la você enxerga uma coisa`)
            await lerInput(`[Enter para continuar]`);
            const itemCaixa = abrirBau(itens)
            Status.pegarItem(personagem, itemCaixa)
            await printLento(`Você obteve um item: ${itemCaixa}`)
            await lerInput(`[Enter para continuar]`);
            await printLento(`Ao pegar o item, você coloca a caixa de volta no mesmo local e guarda o ${itemCaixa}. Logo após isso, você vai dormir.`)
            await lerInput(`[Enter para continuar]`);
            
            return 14;
    }
}
