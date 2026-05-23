import * as readline from 'readline';

const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout 
});

export function lerInput(texto) {
  return new Promise(resolve => {
    rl.question(texto, (resposta) => {
      resolve(resposta);
    });
  });
}

export function fecharInput() {
  rl.close();
}