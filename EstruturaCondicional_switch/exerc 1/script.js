let numero = parseInt(prompt(`Digite um número de 1 a 7`));
switch (numero) {
    case 1:
        alert("Hoje é domingo");
        break;
    case 2:
        alert("Hoje é segunda");
        break;
    case 3:
        alert("Hoje é terça");
        break;
    case 4:
        alert("Hoje é quarta");
        break;
    case 5:
        alert("Hoje é quinta");
        break;
    case 6:
        alert("Hoje é sexta");
        break;
    case 7:
        alert("Hoje é sábado");
        break;
    default:
        alert("Número inválido");
        break;
}