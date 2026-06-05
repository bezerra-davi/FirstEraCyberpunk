import { lerInput, printLento, esperar } from '../../input.js';
import * as Status from '../../sistemas/personagem/status.js';
import * as Turno from '../../sistemas/turno/turno.js';
import * as Itens from '../../sistemas/itens/itens.js';
import * as Habilidades from '../../sistemas/habilidades/habilidades.js';

export async function executarCenaLutaFinal(cena, personagem){
  switch(cena) {
    case 70: 
    printLento(`${Status.personagem.nome} e Pygma se encaram, talvez, por uma ultima vez...`)
    lerInput(`[Enter para continuar]`)
    printLento(`Pygma começa a se contorcer. Seu corpo se retorce em uma transformação dolorosa, enquanto gritos de pura agonia ecoam por toda a masmorra... Quando tudo finalmente se acalma, Pygma já não é mais humano. Agora, transformado, ele é apenas um monstro que precisa ser derrotado.`)
    lerInput(`[Enter para continuar]`)
    const pygma = Status.criarPersonagem(`pygma`, 40, 30, 6, 4, 15, false)
    await Turno.iniciarCombate(personagem, inimigo)
  }
}
