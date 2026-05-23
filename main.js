import { criarPersonagem } from './sistemas/personagem/status.js';
import { iniciarJogo } from './historia/rotas.js';

const player = criarPersonagem(`Heroi`, 100, 50, 30, 20, 15, true);
await iniciarJogo(player);