import * as Status from './sistemas/personagem/status.js';
import { iniciarJogo } from './historia/rotas.js';

// ISSO E SO A DEMO PRA UM TESTE
const player = Status.criarPersonagem(`Herói`, 30, 12, 2000, 2, 8, true);

await iniciarJogo(player);
