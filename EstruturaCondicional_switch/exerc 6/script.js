let codigo = parseInt(prompt(`Digite um valor de um código (100, 200 ou 300)`));
switch (codigo) {
    case 100:
        alert(`Produto: Mouse, preço: RS50,00`);
        break;
    case 200:
        alert(`Produto: Teclado, preço: RS80,00`);
        break;
    case 300:
        alert(`Produto: Monitor, preço: RS900,00`);
        break;
    default:
        alert("Código de produto inválido");
        break;
}