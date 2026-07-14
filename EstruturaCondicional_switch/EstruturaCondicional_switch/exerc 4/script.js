let numero = parseInt(prompt(`Digite um número para escolher a sua bebida! ("1", "2" ou "3")`));
switch (numero) {
    case 1:
        alert(`Você escolheu uma água`);
        break;
    case 2:
        alert(`Você escolheu um refrigerante`);
        break;
    case 3:
        alert(`Você escolheu um suco`);
        break;
    default:
        alert("Código de bebida inválido");
        break;
}