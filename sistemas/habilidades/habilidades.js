export const habilidades = [                      // basicamente todas as habilidades do jogo
    {nome: `placeholder`, custo: 67, dano: 42},

]

export function buscarHabilidade(nome) {
    for (let i = 0; i < habilidades.length; i++) {
        if (habilidades[i].nome === nome) {
        return habilidades[i];
        }
    }
}
