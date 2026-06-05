import { executarCenaFloresta } from './cenas/floresta.js';
import { executarCenaCabana } from './cenas/cabana.js';
import { executarCenaDentroCabana } from './cenas/dentroCabana.js';
import { executarCenaSonho } from './cenas/sonho.js';
import { executarCenaMasmorra } from './cenas/masmorra.js';
import { fecharInput } from '../input.js';


export async function iniciarJogo(personagem) {
  let cenaAtual = 1;
  while (cenaAtual !== null) {
    if (cenaAtual <= 4) {
      cenaAtual = await executarCenaFloresta(cenaAtual, personagem);
    } else if (cenaAtual === 5){
      cenaAtual = await executarCenaCabana(cenaAtual, personagem);
    } else if (cenaAtual >= 6 && cenaAtual <14) {
      cenaAtual = await executarCenaDentroCabana(cenaAtual, personagem);
    } else if (cenaAtual >= 14 && cenaAtual < 15 ){
      cenaAtual = await executarCenaSonho(cenaAtual, personagem);
    } else if (cenaAtual >= 15){
      cenaAtual = await executarCenaMasmorra(cenaAtual, personagem);
     
    } 
  }
  console.log(`Fim do demo!`);
  fecharInput();
}
