import { criarPersonagem } from './sistemas/personagem/status.js';
import { iniciarJogo } from './historia/rotas.js';

// ISSO E SO A DEMO PRA UM TESTE
const player = criarPersonagem(`Herói`, 100, 50, 30, 20, 15, true);
await iniciarJogo(player);
