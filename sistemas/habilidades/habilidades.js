export const habilidades = [                      // basicamente todas as habilidades do jogo
    {nome: `davi`, custo: 67, dano: 42},
    {nome: `ohio`, custo: 67, dano: 42},
    {nome: `abacatudo`, custo: 67, dano: 42},
    {nome: `biruleibe`, custo: 67, dano: 42},
]

export function buscarHabilidade(nome) {
    for (let i = 0; i < habilidades.length; i++) {
        if (habilidades[i].nome === nome) {
        return habilidades[i];
        }
    }
}

export function escolherHabilidades() {
const tresHabilidades = [];

while (tresHabilidades.length < 3) {
            const indice = Math.floor(Math.random() * habilidades.length);
            const habilidade = habilidades[indice];
            
            if (!tresHabilidades.includes(habilidade)) {  //Esse includes vai verificar as habilidades, pra nao sortear a msm varias vezes
            tresHabilidades.push(habilidade);
        }
    }

    return tresHabilidades;
}
