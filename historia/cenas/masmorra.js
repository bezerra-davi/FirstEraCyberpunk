import { lerInput, printLento, esperar } from '../../input.js';
import * as Status from '../../sistemas/personagem/status.js';
import * as Turno from '../../sistemas/turno/turno.js';
import * as Itens from '../../sistemas/itens/itens.js';
import * as Habilidades from '../../sistemas/habilidades/habilidades.js';

export async function executarCenaMasmorra(cena, personagem) {
    switch(cena) {
    case 15:
        await printLento(`O lugar realmente é meio empoeirado, tem umas paredes de pedra...`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`... E é estranho a forma com que elas brilham conforme nós passamos por elas...`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`... Na real eu acho que essas pedras estão brilhando conforme o estranho passa pela caverna...`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Você escuta uns barulhos estranhos...`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`O corredor parece extenso...`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Você começa a se perguntar se foi uma boa ideia...`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Você reflete e se pergunta como será que estão seus familiares e seus amigos...`);
        await printLento(`...Você não planejou nada sobre ficar pela noite...`);
        await printLento(`...Eles possivelmente estão preocupados com seu desaparecimento...`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`― Ei pensando agora eu ainda não perguntei seu nome...`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Estranho: Meu nome é Pygma`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Então meio que todos aqueles livros foi ele que escreveu.`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Você não inspecionou o conteúdo dos livros.`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Pygma: Qual é seu nome?`);
        const nomeEscolhido = await lerInput(`Insira o nome do Héroi: `)
        personagem.nome = nomeEscolhido  
        await printLento(`Seu nome agora é ${personagem.nome}.`)  // Teste do nome do héroi
        await lerInput(`[Enter para continuar]`);
        await printLento(`Você realmente se achava um herói?`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`― Pygma, eu ainda não entendi sobre o que é essa floresta...`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Pygma: É meio que uma dimensão, e como você sempre desejou vir para cá, você apareceu.`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Você realmente achou muito interessante a floresta, porém é completamente falso que você sempre desejou estar nesse local, ou sequer imaginara isso.`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`― Como que eu saio dessa floresta?`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Pygma: Você não pode sair.`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Ele falou num tom alegre meio perturbador...`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`― Como assim?!`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`― Eu estou preso aqui?!!`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Pygma: Sim!!! Isso não é maravilhoso??`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`― Não . . . `);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Pygma: Então você não gostou da floresta?`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`― Bem eu até que . . . `);



        console.log(`V̸̢͌͑̍͋̾̉̒̇̃̐͛̉̅̐̚͠O̸͇͓̎͐̓̐̊͋͗̄͋͋̄͒̃̍͒C̷̢̙͕̣̠̪̜͌̔͋́̀̈́̀̚͘͜͜Ę̷̧͓̰͍̼̘̬̗̦̫̰̂͋̓͊́̄͌͂̒̊͗̿̆̚͜ͅ ̶͈͕̻͚͍̳͚͙̪͛̌͌̿̉̕͝N̸̡̡̺̙̟͇͓̙̤̪̪̬̜̹̦̽͒͆̔̃̅̆͘̕͝ͅͅĄ̸̨̢̱̜̲̭̗͉͈̟̞͖͍̃̀̉̔̚ͅO̵̬͙̻̞̼̍̆̂̈̈́̿̈́̍͝ ̸̼͕̻͎̯͌̒̍P̷̖͋̊͗̂̈Ơ̶̧̨̧̬̹̜̺̗̹͈̻̖̦̭̞̩̐̊͐̓͋͑̓͑̐̐͛̕͝͝D̴̨̤͔̺̱̬̭͙̹̼͍̹͕̑̏͗́͐̾̒͗̐Ẻ̵̞̻̍̈́͋̂̀̈̔̀ ̷̣̯̤̤̜̃̿ͅS̵̛̛̳̫̖͉̥͆́̔̆̿̒̈́͝Â̴̡͙͈̟̲͈̱͇̳͊̈́̋̀͘ͅI̶͍͈̥̣̲͂́̂̔͛̋̆̓̎͂͗̅̐͂̕͠͝R̷̛̭̠̥̬̭̣̊̃̆̈́͆̀̓̉̕͠`);


        await lerInput(`[Enter para continuar]`);
        await printLento(`― Que isso cara????`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Pygma: Você sempre quis vir para cá! E você Ę̶̺̝̖̘͕̝͇̞̖͉̞̼͊͌̄̇͒̏͌̈͗̕͜͝͠S̷͙͑̎͛͑͆̾͗C̵̢͇̪̉͌͑̑̅͆͊Ỡ̵̡͖̹̩̙̙̣̖͓̥̥̀̃̍͂͛̅̈́͊͌͜L̵̞̼̮͔͒̌̉͑̂̑̾́̂̇̂̕͝͝͠͝ͅḤ̷̄͂̈͐̈̄͋̈͒͜͝ͅĘ̶̢̣̗̗̤͍̩̜̲̎̀̀̚͜U̶̱͓̮̺̺̟̫̞̙͙̾̄͌̔͝ vir para cá!!!`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Pygma: O QUE QUE TEM LÁ DO Ǫ̴̡̞̠̋̍͒̈͂́̈́͑̽̉̕Ų̵̜̯͈̟̬̬̹͎̪̈́̚T̶͉̹̗̏̾͗̆͒R̸̗̙̟͙̞͊̽̓̊͌̀̿̔̂͛͌͒͝Ǒ̵̹͎̈̎͊̑͗ ̶̛̦̝̠̟̘̑̃̓́̈́̊̀̌̇͊͗̋̊̂͜ͅL̵̢̡̦͎̬̼͚̜͈͓̟̤̱͕̝̏̄̽̕͜ͅA̸̢̛͔̬̘͉̪̥̗̞͚̒D̸̢͕̭̪̭̠̺̦̲̻̮̗̺͒̽Ơ̸͚͚͂͆͒̃͑́̂̌͛̿͠ DE TÃO INTERESSANTE?`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Até onde você lembra você só foi fazer uma trilha e nada demais.`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Você observa um misto de tristeza e raiva na cara de Pygma...`);
        await printLento(`Parece que as paredes da masmorra também reagem a isso...`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Elas vão ficando cada vez mais vermelhas.`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Você está com medo de fazer qualquer comentário.`);
        await lerInput(`[Enter para continuar]`);
        await printLento(`Você sente que esse cara é um maluco.`);
        await lerInput(`[Enter para continuar]`);
        return 16;
    case 16:{
        await printLento(`O que você vai fazer?`);
        console.log(`1 - Correr`);
        console.log(`2 - Lutar`);
        const escolha = parseInt(await lerInput(``));

        if (escolha === 2) {
            await esperar(500);
            await printLento(`Você decide lutar...`);
            await esperar(800);
    
            for (let i = 0; i < 5; i++) {
            await printLento(`VOCÊ NÃO PODE SAIR`);
            await esperar(200);
        }
    
        await esperar(600);
        await printLento(`...`);
        await esperar(800);
        
        //const Pygma = Status.criarPersonagem(`Pygma`, vida, energia, ataque, defesa, velocidade, false);
        //await Turno.iniciarCombate(personagem, inimigo);
    }
        //Opções: (Aqui vai ter o timer dramático)
        
        //- Correr
        //- Lutar

        //Lutar:
        // Vocês entram num combate //
        // Vai ter drama e texto do tipo "VOCÊ NÃO PODE SAIR" floodando a tela de forma dramática"

        //"Realmente"

        //"Ele está morto agora"

        //" . . . "

        //"O silêncio agora presente é assustador"

        //"A masmorra está muito macabra então você decide voltar para a cabana para explorar os livros que ele escreveu"

        //". . . "

        //"Vou poupar você um pouco sobre os escritos dramáticos de Pygma e mostrar somente a notícia ruim"

        //"Você agora está preso nessa floresta que o Pygma esteve preso a 1000 anos, que ele construiu e ficou eternamente preso"

        //"Você libertou Pygma de seu sofrimento que tanto acreditava ser o melhor paraíso do mundo"

        //"E agora?"
        
        return null;
        }
    }
}
