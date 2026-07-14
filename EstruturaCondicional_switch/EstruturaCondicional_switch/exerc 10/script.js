let conversao = parseInt(prompt(`Digite o tipo de conversão que você quer fazer (1 ou 2)`));
switch (conversao) {
    case 1:
        let km = parseFloat(prompt("Digite o valor da sua distância em quilometros"));
        let contaKm = km * 1000;
        alert(`O seu valor em km para metros ficará ${contaKm}m`);
        break;
    case 2:
        let m = parseFloat(prompt("Digite o valor da sua distância em metros"));
        let contaM = m * 0.001
        alert(`O seu valor em m para quilometros ficará ${contaM}km`);
        break;
    default:
        alert("Opção de conversão inválida.");
        break;
}