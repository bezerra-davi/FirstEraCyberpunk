export const habilidades = [                      // basicamente todas as habilidades do jogo
    {nome: `slash`, custo: 4, dano: 8},
    {
        nome: `Ishin cut`, custo: 7, dano:7,
        debuff: { nome: "Sangramento", danoPorTurno: 3, duracao: 3 }
    },
    {nome: `Smash`, custo: 2, dano: 4},
    {nome: `Dash slash`, custo: 3, dano: 5},
    {nome: `long cut`, custo: 10, dano: 14},
    {nome: `rabbit kick`, custo: 1, dano: 2}
]

export function buscarHabilidade(nome) {
    for (let i = 0; i < habilidades.length; i++) {
        if (habilidades[i].nome === nome) {
        return habilidades[i];
        }
    }
}

export function escolherHabilidades(personagem) {
    const tresHabilidades = [];

    const habilidadesDisponiveis = habilidades.filter(function(habGlobal) {
        
        const jogadorJaPossui = personagem.habilidades.some(function(habPersonagem) {
            return habPersonagem.nome === habGlobal.nome;
        });

        return !jogadorJaPossui;
    });

    if (habilidadesDisponiveis.length === 0) {
        return []; 
    }

    const quantidadeSorteio = Math.min(3, habilidadesDisponiveis.length);

    while (tresHabilidades.length < quantidadeSorteio) {
        const indice = Math.floor(Math.random() * habilidadesDisponiveis.length);
        const habilidade = habilidadesDisponiveis[indice];
            
        if (!tresHabilidades.includes(habilidade)) {  
            tresHabilidades.push(habilidade);
        }
    }

    return tresHabilidades;
}
