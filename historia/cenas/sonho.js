import { lerInput, printLento } from '../../input.js';

export async function executarCenaSonho(cena, personagem) {
    switch(cena) {
    case 14:
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
        return 15;
    }
}