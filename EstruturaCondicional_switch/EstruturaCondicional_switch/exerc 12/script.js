let valorCompra = parseFloat(prompt("Insira o valor da sua compra"));
let tipoCliente = prompt(`Digite qual tipo de cliente você é (A, B ou C)`);
switch (tipoCliente.toUpperCase()) {
    case "A":
        let conta1 = valorCompra - (valorCompra * 0.05);
        alert(`Categoria do cliente: Cliente Premium, valor final da compra: ${conta1}`);
        break;
    case "B":
        let conta2 = valorCompra - (valorCompra * 0.10);
        alert(`Categoria do cliente: Cliente Ouro, valor final da compra: ${conta2}`);
        break;
    case "C":
        let conta3 = valorCompra - (valorCompra * 0.15);
        alert(`Categoria do cliente: Cliente Diamante, valor final da compra: ${conta3}`);
        break;
    default:
        alert("Tipo de cliente inválido.");
        break;
}