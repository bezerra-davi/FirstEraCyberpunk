export const itens = [                      // basicamente todos os itens do jogo
    {nome: `placeholder`, cura: 67, curaEnergia: 42},

]

export function buscarItem(nome) {
    for (let i = 0; i < itens.length; i++) {
        if (itens[i].nome === nome) {
        return itens[i];
        }
    }
}

export function abrirBau() {  // funcao para um sistema de abrir baus nas rotas
  const indice = Math.floor(Math.random() * itens.length);
  const itemSorteado = itens[indice];
  console.log(`Você encontrou: ${itemSorteado.nome}!`);
  return itemSorteado;
}
