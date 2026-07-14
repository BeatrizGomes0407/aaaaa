let caixa = parseFloat(prompt("Insira a quantidade de dinheiro existente no caixa"));
let produtos = parseInt(prompt("Insira a quantidade de produtos a ser comprado"));
let preco = parseFloat(prompt("Insira o valor do preço de cada unidade"));
let valorCompra = produtos*preco;
let valorFinal;
let oitentaCaixa = caixa*0.80;
if(valorCompra > oitentaCaixa){
    valorFinal = valorCompra + (valorCompra*0.10);
    alert("A compra foi feita a prazo em 3 parcelas" + (valorFinal/3).toFixed(2));
    alert("Valor fina da compra: RS" + valorFinal.toFixed(2));
} else {
    valorFinal = valorCompra - (valorCompra * 0.05);
    alert("A compra será a vista no valor de RS" + valorFinal.toFixed(2));
}