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
