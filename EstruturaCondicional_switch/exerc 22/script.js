let media = parseInt(prompt("Qual o seu tipo de média? (1, 2 ou 3)"));
switch (media) {
    case 1:
        let primeiraNota1 = parseFloat(prompt("Qual a sua primeira nota?"));
        let segundaNota1 = parseFloat(prompt("Qual a sua segunda nota?"));
        let media1 = ((primeiraNota1 * 2) + (segundaNota1 * 3)) / 5;
        alert(`O seu tipo de média é: Média de 2 notas, as suas notas informadas são ${primeiraNota1} e ${segundaNota1}, a sua média ponderada é ${media1.toFixed(2)}`);
        break;
    case 2:
        let primeiraNota2 = parseFloat(prompt("Qual a sua primeira nota?"));
        let segundaNota2 = parseFloat(prompt("Qual a sua segunda nota?"));
        let terceiraNota2 = parseFloat(prompt("Qual a sua terceira nota?"));
        let media2 = ((primeiraNota2 * 2) + (segundaNota2 * 3) + (terceiraNota2 * 5)) / 10;
        alert(`O seu tipo de média é: Média de 3 notas, as suas notas informadas são ${primeiraNota2}, ${segundaNota2}, e ${terceiraNota2} a sua média ponderada é ${media2.toFixed(2)}`);
        break;
    case 3:
        let primeiraNota3 = parseFloat(prompt("Qual a sua primeira nota?"));
        let segundaNota3 = parseFloat(prompt("Qual a sua segunda nota?"));
        let terceiraNota3 = parseFloat(prompt("Qual a sua terceira nota?"));
        let quartaNota3 = parseFloat(prompt("Qual a sua quarta nota?"));
        let media3 = ((primeiraNota3 * 1) + (segundaNota3 * 2) + (terceiraNota3 * 3) + (quartaNota3 * 4)) / 10;
        alert(`O seu tipo de média é: Média de 4 notas, as suas notas informadas são ${primeiraNota3}, ${segundaNota3}, ${terceiraNota3} e ${quartaNota3} a sua média ponderada é ${media3.toFixed(2)}`);
        break;
    default:
        alert("Tipo de média inválida.");
        break;
}