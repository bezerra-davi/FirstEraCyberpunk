import { executarCenaFloresta } from './cenas/floresta.js';
import { executarCenaCabana } from './cenas/cabana.js';
import { fecharInput } from '../input.js';

export async function iniciarJogo(personagem) {
  let cenaAtual = 1;
  while (cenaAtual !== null) {
    if (cenaAtual <= 4) {
      cenaAtual = await executarCenaFloresta(cenaAtual, personagem);
    } else {
      cenaAtual = await executarCenaCabana(cenaAtual, personagem);
    }
  }
  console.log(`Fim do demo!`);
  fecharInput();
}