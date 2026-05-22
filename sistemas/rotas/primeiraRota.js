export function escolherCaminho1(caminho, opcao1, opcao2, opcao3){
    while(true){
    switch(caminho){
        case 1:
             console.log(opcao1);
             break
            case 2:
                console.log(opcao2);
                break
                case 3:
                    return console.log(opcao3);
    
                    default:
                    return `tentativa inválida`;
      }
        caminho = Number(prompt(`Escolhar outro caminho: `))
   }
}
