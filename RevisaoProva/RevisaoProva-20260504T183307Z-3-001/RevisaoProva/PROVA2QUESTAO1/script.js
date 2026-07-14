let volumeInicial = parseFloat(prompt(`Insira o volume inicial desse reservatório em litros`));
let litrosPorHora = parseFloat(prompt(`Insira a quantidade de litros adicionados por hora`));
let tempoAbast = parseFloat(prompt(`Insira o tempo de abastecimento em horas`));
let volumeFinal = (volumeInicial+(litrosPorHora*tempoAbast));
alert(`O volume final é de ${volumeFinal} litros`);