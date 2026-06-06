import { executarCenaFloresta } from './cenas/floresta.js';
import { executarCenaCabana } from './cenas/cabana.js';
import { executarCenaDentroCabana } from './cenas/dentroCabana.js';
import { executarCenaSonho } from './cenas/sonho.js';
import { executarCenaMasmorra } from './cenas/masmorra.js';
import { fecharInput, printLento, esperar } from '../input.js';

async function printLentoFinal(texto) {
  for (let i = 0; i < texto.length; i++) {
    process.stdout.write(texto[i]);
    await esperar(200);
  }
  console.log();
}

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

  console.clear();
  await esperar(1000);
  await printLento(`Uma experiência criada e desenvolvida por:`);
  await esperar(300);
  
  console.log(`\n`);
  await printLento(`Marco Antonio`);
  await esperar(800);
  await printLento(`Álvaro Diaz`);
  await esperar(800);
  await printLento(`Davi Bezerra`);
  await esperar(2500);

  console.clear();
  await esperar(1500);
  
  await printLentoFinal(`Continua...`);

  fecharInput();
}
