export const itens = [                      // basicamente todos os itens do jogo
    // consumiveis
    { nome: `Carne de Coelho`, tipo: `consumivel`, cura: 20, curaEnergia: 10 },
    { nome: `Carne de Coelho Azul Assada`, tipo: `consumivel`, cura: 20, curaEnergia: 10 },
    {nome: `Health Stone`, tipo: `consumivel`, cura: 10, curaEnergia: 0},
    {nome: `Mel de Texturgo`, tipo: `consumivel`, cura: 8, curaEnergia: 10},
    {nome: `Bolt`, tipo: `consumivel`, cura: 0, curaEnergia: 20},

    // armas
    { nome: `Espada de Aço`, tipo: `arma`, categoria: `espada`, bonusAtaque: 1 },
    { nome: `Katana`, tipo: `arma`, categoria: `katana`, bonusAtaque: 2 },
    { nome: `Katana de Shadow Stone`, tipo: `arma`, categoria: `katana`, bonusAtaque: 3 },
    { nome: `Nichirin`, tipo: `arma`, categoria: `katana`, bonusAtaque: 4 },

    // armaduras
    { nome: `Traje de Ronin`, tipo: `armadura`, bonusVidaMaxima: 5, bonusDefesa: 1 },
    { nome: `Armadura de Placas`, tipo: `armadura`, bonusVidaMaxima: 8, bonusDefesa: 2 },
    { nome: `Armadura de Shadow Stone`, tipo: `armadura`, bonusVidaMaxima: 12, bonusDefesa: 3 },


]

export const itensExclusivos = [
    { nome: `Olho do Chacal`, tipo: `consumivel`, bonusAtaque: 3 },
    { nome: `Dente do Chacal`, tipo: `consumivel`, bonusVidaMaxima: 8, bonusDefesa: 2 } 
]

export function buscarItem(nome) {
    for (let i = 0; i < itens.length; i++) {
        if (itens[i].nome === nome) {
            return itens[i];
        }
    }
    for (let i = 0; i < itensExclusivos.length; i++) {
        if (itensExclusivos[i].nome === nome) {
            return itensExclusivos[i];
        }
    }
}

export function buscarItemExclusivo(nome) {
    for (let i = 0; i < itensExclusivos.length; i++) {
        if (itensExclusivos[i].nome === nome) {
        return itensExclusivos[i];
        }
    }
}
        
export function abrirBau(itens) {  // funcao para um sistema de abrir baus nas rotas
  const indice = Math.floor(Math.random() * itens.length);
  const itemSorteado = itens[indice];
  console.log(`Você encontrou: ${itemSorteado.nome}!`);
  return itemSorteado;
}
