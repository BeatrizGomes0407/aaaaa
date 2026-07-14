let valorInicial = parseInt (prompt("Insira o valor inicial"));
let valorFinal = parseInt (prompt("Insira o valor final"));
let valorKwh = parseInt (prompt("Insira o valor do kwh até o consumo de 150 (em RS)"))
let consumo = (valorFinal - valorInicial);
let totalConta;
if (consumo <= 150) {
    totalConta = consumo * valorKwh;
} else {
    let consumoNormal = 150;
    let consumoExcedente = consumo - 150;
    let valorExcedente = valorKwh*1.20
}