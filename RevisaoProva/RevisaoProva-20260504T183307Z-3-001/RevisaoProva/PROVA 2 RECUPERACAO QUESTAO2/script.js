let quantTotalCartazes = parseInt(prompt(`Insira um valor para a quantidade total de cartazes a serem produzidos`));
let quantCartazesFolha = parseInt(prompt(`Insira um valor para a quantidade de cartazes que cabem em uma folha de impressão`));
let folhasPorHora = parseInt(prompt(`Insira um valor para o número de folhas que a máquina imprime por hora`));
let tempoTotal = parseInt(prompt(`Insira um valor para o tempo total disponível para a produção (em horas)`));
let quantFolhasTotal = quantTotalCartazes*quantCartazesFolha;
let quantMaximaFolhas = quantFolhasTotal/folhasPorHora;
let quantCartazesProduzidos = quantFolhasTotal/tempoTotal
alert(`Quantidade total de folhas necessárias para produzir todos os cartazes: ${quantFolhasTotal.toFixed(2)} folhas`);
alert(`Quantidade máxima de folhas que podem ser produzidas no tempo disponível: ${quantMaximaFolhas.toFixed(2)} folhas`);
alert(`Quantidade de cartazes que efetivamente poderão ser produzidos nesse período: ${quantCartazesProduzidos.toFixed(2)} cartazes`)