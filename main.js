import { criarPersonagem } from './sistemas/personagem/status.js';
import { iniciarJogo } from './historia/rotas.js';

// ISSO E SO A DEMO PRA UM TESTE
const player = criarPersonagem(`Herói`, 36, 15, 5, 3, 10, true);
await iniciarJogo(player);
