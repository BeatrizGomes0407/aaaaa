let quantHoras = parseFloat(prompt("Insira a sua quantidade de horas trabalhadas"));
let codigo = parseInt(prompt("Qual o seu código de cargo? (1, 2, 3, 4 ou 5)"));
switch (codigo) {
    case 1:
        let conta1 = quantHoras * 35;
        alert(`O seu cargo é: Programador Júnior e o seu salário é de ${conta1.toFixed(2)}`);
        break;
    case 2:
        let conta2 = quantHoras * 55;
        alert(`O seu cargo é: Programador Pleno e o seu salário é de ${conta2.toFixed(2)}`);
        break;
    case 3:
        let conta3 = quantHoras * 80;
        alert(`O seu cargo é: Programador Sênior e o seu salário é de ${conta3.toFixed(2)}`);
        break;
    case 4:
        let conta4 = quantHoras * 95;
        alert(`O seu cargo é: Analista de Sistemas e o seu salário é de ${conta4.toFixed(2)}`);
        break;
    case 5:
        let conta5 = quantHoras * 130;
        alert(`O seu cargo é: Arquiteto de Software e o seu salário é de ${conta5.toFixed(2)}`);
        break;
    default:
        alert("Código inválido.");
        break;
}