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

        if (escolha === 1) {
            await esperar(500);
            await printLento(`Você corre, corre pelo corredor e você escuta o Pygma gritar por você...`);
            await esperar(1000);
            await printLento(`Você corre, você está desesperado, o túnel não parece acabar . . .`);
            await lerInput(`[Enter para continuar]`);
            
            await printLento(`Você para de escutar os gritos. Não é preciso mais correr.`);
            await printLento(`O que se pode fazer agora?`);
            await lerInput(`[Enter para continuar]`);
            
            await printLento(`Você caminha mais um pouco sobre o escuro daquelas masmorras...`);
            await printLento(`Você não compreende ao certo o comportamento do Pygma, de alguma forma ele parece frustrado.`);
            await printLento(`Talvez ele se sinta sozinho nesse local.`);
            await esperar(1000);
            await printLento(`. . .`);
            await esperar(1000);
            await lerInput(`[Enter para continuar]`);

            await printLento(`Ao tatear as paredes escuras, você tropeça em um antigo baú de pedra soterrado por escombros.`);
            await printLento(`Dentro dele, um brilho arroxeado pulsa.`);
            
            const katanaShadow = Itens.buscarItem(`Katana de Shadow Stone`);
            const armaduraShadow = Itens.buscarItem(`Armadura de Shadow Stone`);
            
            Status.pegarItem(personagem, katanaShadow);
            Status.pegarItem(personagem, armaduraShadow);
            
            await printLento(`Você obteve: [${katanaShadow.nome}] e [${armaduraShadow.nome}].`);
            await printLento(`Sentindo o perigo iminente, você equipa os artefatos rapidamente.`);
            Status.equiparItem(personagem, katanaShadow);
            Status.equiparItem(personagem, armaduraShadow);
            await lerInput(`[Enter para continuar]`);
            
            await printLento(`Você se lembra que é necessário perceber quando algo te faz bem ou te faz mal.`);
            await printLento(`Essa situação não parece te fazer bem.`);
            await esperar(1000);
            await printLento(`. . .`);
            await esperar(1000);
            
            await printLento(`Antes de ter pena dele, você precisa ter pena de si mesmo.`);
            await lerInput(`[Enter para continuar]`);
            
            await printLento(`De repente, a masmorra pulsa. Os sentimentos de Pygma tomam formas físicas!`);
            await printLento(`Como resolver? Como encarar?`);
            await esperar(1000);
            
            await printLento(`Um espectro distorcido bloqueia o corredor.`);
            const ecoSolidao = Status.criarPersonagem(`Eco da Solidão`, 30, 0, 6, 3, 12, false);
            await Turno.iniciarCombate(personagem, ecoSolidao);
            
            if (!Status.estarVivo(personagem)) {
                return 1;
            }

            await printLento(`\nA criatura se desfaz em fumaça, mas o túnel continua.`);
            await printLento(`Você sente suas pernas pesarem, a energia do lugar suga sua esperança.`);
            await lerInput(`[Enter para continuar]`);

            await printLento(`As pedras vermelhas da parede se desprendem e formam um golem bizarro.`);
            const pesoArrependimento = Status.criarPersonagem(`Peso do Arrependimento`, 80, 0, 8, 8, 2, false);
            await Turno.iniciarCombate(personagem, pesoArrependimento);
            
            if (!Status.estarVivo(personagem)) {
                return 1;
            }

            await printLento(`\nO golem desmorona.`);
            await esperar(1000);
            await printLento(`Você está exausto...`);
            await esperar(1000);
            await printLento(`...Mas a saída parece estar próxima.`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`E as batalhas dramáticas? Você finalmente chega ao fundo da masmorra.`);
            await esperar(1500);
            
            await printLento(`No fundo da masmorra você vê algo...`);
            await lerInput(`[Enter para continuar]`);
            
            await printLento(`Um espelho feito de obsidiana negra. Porém, o reflexo nele não acompanha seus movimentos.`);
            await esperar(1000);
            await printLento(`"Você" sorri. Um sorriso apático, de quem aceitou a "floresta".`);
            await lerInput(`[Enter para continuar]`);
            
            await printLento(`O espelho derrete, e a figura deforma até sair de lá e pisar no mesmo chão que você.`);
            await printLento(`Ele sussurra com a sua voz:`);
            await printLento(`Por que lutar? Pygma ja te disse: Aqui não precisamos nos preocupar com nada...`);
            await esperar(1500);

            await printLento(`A face da sua própria submissão avança contra você.`);
            
            // O clone copia os atributos base do herói.
            const cloneHeroi = Status.criarPersonagem(`Reflexo de ${personagem.nome}`, personagem.vidaMaxima, 0, personagem.ataque, personagem.defesa, personagem.velocidade, false);
            await Turno.iniciarCombate(personagem, cloneHeroi);
            
            if (!Status.estarVivo(personagem)) {
                return 1;
            }

            await printLento(`\nO reflexo cai de joelhos e se desfaz em pó de vidro...`);
            await printLento(`Atrás de onde o espelho estava, há uma pesada porta de madeira. Você a chuta com todas as suas forças!`);
            await lerInput(`[Enter para continuar]`);
            
            
            await printLento(`Você sente a brisa da floresta bater no seu rosto.`);
            await printLento(`Mas algo está muito errado.`);
            await lerInput(`[Enter para continuar]`);
            
            await printLento(`O céu não tem mais cor. As árvores estão secas, retorcidas, como se a vida tivesse sido sugada.`);
            await printLento(`E a poucos metros da saída da masmorra, de costas para você, está ele.`);
            await esperar(1500);
            
            await printLento(`Pygma: ...Eu construí este lugar.`);
            await lerInput(`[Enter para continuar]`);
            
            await printLento(`Ele não está gritando. A voz dele agora é baixa, carregada de uma tristeza doentia.`);
            await printLento(`Pygma: Mil anos. Sem dor, sem fome, sem sofrimento do mundo real.`);
            await printLento(`Pygma: Tudo perfeitamente planejado nos meus livros. Uma eternidade pacífica.`);
            await lerInput(`[Enter para continuar]`);
            
            await printLento(`Ele finalmente se vira. O rosto dele está contorcido em lágrimas e fúria absoluta.`);
            await esperar(1000);
            
            await printLento(`Pygma: E VOCÊ QUER JOGAR TUDO ISSO FORA PARA VOLTAR PARA AQUELE INFERNO LÁ FORA?!`);
            await lerInput(`[Enter para continuar]`);
            
            await printLento(`Pygma: POR QUE VOCÊ NÃO QUER FICAR COMIGO?!`);
            await esperar(1500);
            
            await printLento(`A aura ao redor de Pygma distorce o próprio ar da floresta.`);
            await printLento(`Não há mais diálogo. Não há mais como correr.`);
            await printLento(`É lutar pela sua liberdade, ou ficar aqui para sempre.`);
            await lerInput(`[Enter para continuar]`);
            
            const bossPygma = Status.criarPersonagem(`Pygma, o Prisioneiro Eterno`, 150, 0, 15, 8, 20, false);
            await Turno.iniciarCombate(personagem, bossPygma);
            
            if (!Status.estarVivo(personagem)) {
                await printLento(`Sua visão escurece. A última coisa que você ouve é Pygma sussurrando: "Finalmente, um amigo..."`);
                return 1;
            }

            await printLento(`\nPygma cai no chão, ofegante, enquanto a floresta começa a desmoronar em pixels e fumaça ao redor de vocês...`);
            
            // continua para o final do jogo
            return null;
            }
        if (escolha === 2) {
            await esperar(500);
            await printLento(`Você decide lutar...`);
            await esperar(800);
    
            for (let i = 0; i < 5; i++) {
            await printLento(`VOCÊ NÃO PODE SAIR`);
            await esperar(200);
            }

            await printLento(`${personagem.nome} e Pygma se encaram, talvez, por uma ultima vez...`)
            await lerInput(`[Enter para continuar]`)
            await printLento(`Pygma começa a se contorcer. Seu corpo se retorce em uma transformação dolorosa, enquanto gritos de pura agonia ecoam por toda a masmorra... Quando tudo finalmente se acalma, Pygma já não é mais humano. Agora, transformado, ele é apenas um monstro que precisa ser derrotado.`)
            await lerInput(`[Enter para continuar]`)
            const pygma = Status.criarPersonagem(`pygma, O Prisioneiro Eterno`, 100, 30, 6, 4, 15, false)
            await Turno.iniciarCombate(personagem, pygma)

                if (!Status.estarVivo(personagem)) {
                await printLento(`Sua visão escurece. A última coisa que você ouve é Pygma sussurrando: "Finalmente, um amigo..."`);
                return 1;
            }
                
            await printLento(`Após uma longa batalha, Pygma se encontra jogado em meio às pedras frias da masmorra.`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`Seus olhos estão quase sem vida, e seu corpo, destroçado.`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`A batalha foi cruel. Um buscava a liberdade, e o outro, viver em uma eterna ilusão.`);
            await lerInput(`[Enter para continuar]`);
            await printLento(`Pygma fecha os olhos e morre no silêncio pós-batalha.`);
            await lerInput(`[Enter para continuar]`);
        
    
            await esperar(600);
            await printLento(`...`);
            await esperar(800);

            await printLento(`O silêncio agora presente é assustador.`);
            await printLento(`A masmorra ficou fria e extremamente macabra, então você decide voltar correndo para a cabana para explorar os livros que ele escreveu e achar uma saída.`);
            await lerInput(`[Enter para continuar]`);
                
            await printLento(`Você abre os manuscritos empoeirados na estante. Vou poupar você um pouco sobre os longos e dramáticos escritos de Pygma e mostrar somente a notícia ruim...`);
            await esperar(1500);
                
            await printLento(`Nas últimas páginas, a tinta fresca revela a terrível verdade de como esta dimensão funciona:`);
            await printLento(`"A floresta exige um arquiteto. Uma mente para mantê-la viva."`);
            await lerInput(`[Enter para continuar]`);
                
            await printLento(`Você sente uma fisgada violenta no peito. Seus olhos começam a brilhar com o mesmo tom roxo que Pygma tinha.`);
            await printLento(`Você libertou Pygma de seu sofrimento que ele tanto acreditava ser o melhor paraíso do mundo...`);
            await printLento(`E agora?`);
            await esperar(1000);
                
            await printLento(`Você agora está preso nessa floresta que o Pygma esteve preso há 1000 anos, que ele construiu e ficou eternamente confinado.`);
            await printLento(`Você caminha até a janela da cabana. Você é o novo Dono.`);
            await lerInput(`[Enter para continuar]`);
            
            return null;
            }
            else {
                console.log(`Opção inválida. Escolha 1 ou 2.`);
            }
        return null;
        }
    }
}
