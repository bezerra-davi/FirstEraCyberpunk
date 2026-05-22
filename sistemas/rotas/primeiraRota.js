export function escolherCaminho1(caminho, opcao1, opcao2, opcao3){
    while(true){
    switch(caminho){
        case 1:
            return opcao1;
            case 2:
                return opcao2;
                case 3:
                    return opcao3;
                    break
                    default:
                    return `tentativa inválida`;
      }
   }
}
