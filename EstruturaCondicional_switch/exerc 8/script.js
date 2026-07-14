let numero = parseInt(prompt(`Digite um número para o seu curso (1, 2 ou 3)`));
switch (numero) {
    case 1:
        alert("Você escolheu: Informática (parabéns você está condenado)");
        break;
    case 2:
        alert("Você escolheu: Administração");
        break;
    case 3:
        alert("Você escolheu: Redes de Computadores");
        break;
    default:
        alert("Código de curso inválido!");
        break;
}