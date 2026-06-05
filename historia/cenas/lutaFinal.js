import { lerInput, printLento, esperar } from '../../input.js';
import * as Status from '../../sistemas/personagem/status.js';
import * as Turno from '../../sistemas/turno/turno.js';
import * as Itens from '../../sistemas/itens/itens.js';
import * as Habilidades from '../../sistemas/habilidades/habilidades.js';

export async function executarCenaLutaFinal(cena, personagem){
  switch(cena) {
    case 70: 
    await printLento(`${personagem.nome} e Pygma se encaram, talvez, por uma ultima vez...`)
    await lerInput(`[Enter para continuar]`)
    await printLento(`Pygma começa a se contorcer. Seu corpo se retorce em uma transformação dolorosa, enquanto gritos de pura agonia ecoam por toda a masmorra... Quando tudo finalmente se acalma, Pygma já não é mais humano. Agora, transformado, ele é apenas um monstro que precisa ser derrotado.`)
    await lerInput(`[Enter para continuar]`)
    const pygma = Status.criarPersonagem(`pygma`, 40, 30, 6, 4, 15, false)
    await Turno.iniciarCombate(personagem, pygma)
    await printLento(`Após uma longa batalha, Pygma se encontra jogado em meio às pedras frias da masmorra.`);
    await lerInput(`[Enter para continuar]`);
    await printLento(`Seus olhos estão quase sem vida, e seu corpo, destroçado.`);
    await lerInput(`[Enter para continuar]`);
    await printLento(`A batalha foi cruel. Um buscava a liberdade, e o outro, viver em uma eterna ilusão.`);
    await lerInput(`[Enter para continuar]`);
    await printLento(`Pygma fecha os olhos e morre no silêncio pós-batalha.`);
    await lerInput(`[Enter para continuar]`);
    return 71;
  }
}
