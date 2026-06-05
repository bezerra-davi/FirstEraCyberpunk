export const itens = [                      // basicamente todos os itens do jogo
    // consumiveis
    { nome: `Carne de Coelho`, tipo: `consumivel`, cura: 20, curaEnergia: 10 },
    { nome: `Carne de Coelho Azul Assada`, tipo: `consumivel`, cura: 20, curaEnergia: 10 },
    {nome: `Health Stone`, tipo: `consumivel`, cura: 10, curaEnergia: 0},
    {nome: `Mel de Texturgo`, tipo: `consumivel`, cura: 8, curaEnergia: 10},
    {nome: `Bolt`, tipo: `consumivel`, cura: 0, curaEnergia: 20},

    // armas
    { nome: `Espada de Aço`, tipo: `arma`, categoria: `espada`, bonusAtaque: 5 },
    { nome: `Katana`, tipo: `arma`, categoria: `katana`, bonusAtaque: 8 },
    { nome: `Katana de Shadow Stone`, tipo: `arma`, categoria: `katana`, bonusAtaque: 15 },
    { nome: `Nichirin`, tipo: `arma`, categoria: `katana`, bonusAtaque: 20 },

    // armaduras
    { nome: `Traje de Ronin`, tipo: `armadura`, bonusVidaMaxima: 20, bonusDefesa: 5 },
    { nome: `Armadura de Placas`, tipo: `armadura`, bonusVidaMaxima: 10, bonusDefesa: 4 },
    { nome: `Armadura de Shadow Stone`, tipo: `armadura`, bonusVidaMaxima: 30, bonusDefesa: 8 },


]

export function buscarItem(nome) {
    for (let i = 0; i < itens.length; i++) {
        if (itens[i].nome === nome) {
        return itens[i];
        }
    }
}

export function abrirBau(itens) {  // funcao para um sistema de abrir baus nas rotas
  const indice = Math.floor(Math.random() * itens.length);
  const itemSorteado = itens[indice];
  console.log(`Você encontrou: ${itemSorteado.nome}!`);
  return itemSorteado;
}
