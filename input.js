// a gente precisava desse readline pq aparentemente o prompt do javascript não funciona no node.js pra executar no terminal
// ele basicamente consegue ler oq a pessoa digita no terminal
import * as readline from 'readline';

const rl = readline.createInterface({  // esse createInterface conecta o readline com o terminal do computador
  input: process.stdin,  // process.stdin e como se fosse a "entrada" do terminal, o teclado da pessoa
  output: process.stdout // process.stdout e a "saída" do terminal, o que aparece na tela
});

// criei essa função aqui pra substituir o prompt, ela para o código e espera o usuário digitar algo
// esse await na frente dela faz o código esperar a resposta antes de continuar

export function lerInput(texto) {
  return new Promise(function(resolve) {
    rl.question(texto, function(resposta) {
      resolve(resposta); // quando a pessoa aperta Enter, ele envia a resposta de volta
    });
  });
}

// fecha o terminal quando o jogo termina
export function fecharInput() {
  rl.close();
}