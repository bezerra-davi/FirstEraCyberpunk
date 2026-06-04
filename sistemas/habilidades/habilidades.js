export const habilidades = [                      // basicamente todas as habilidades do jogo
    {nome: `slash`, custo: 25, dano: 28},
    {nome: `Ishin cut`, custo: 40, dano: 48},
    {nome: `Smash`, custo: 45, dano: 52},
    {nome: `Dash slash`, custo: 35, dano: 35},
    {nome:, custo:, dano:}
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
