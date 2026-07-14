let regiao = parseInt(prompt(`Digite seu código de origem (de 1 a 5)`));
switch (regiao) {
    case 1:
        alert(`A sua região é: Norte`);
        break;
    case 2:
        alert(`A sua região é: Nordeste`);
        break;
    case 3:
        alert(`A sua região é: Centro-Oeste`);
        break;
    case 4:
        alert(`A sua região é: Sudeste`);
        break;
    case 5:
        alert(`A sua região é: Sul`);
        break;
    default:
        alert("Código de origem inválido.");
        break;
}