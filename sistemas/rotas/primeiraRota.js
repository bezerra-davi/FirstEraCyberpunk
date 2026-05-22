export function escolherCaminho1(caminho, opcao1, opcao2, opcao3){
    while(true){
    switch(caminho){
        case 1:
             opcao1;
             break
            case 2:
                opcao2;
                break
                case 3:
                    return opcao3;
    
                    default:
                    return `tentativa inválida`;
      }
   }
}
