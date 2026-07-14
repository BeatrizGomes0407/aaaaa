let primeiroNumero = parseFloat(prompt(`Digite seu primeiro número`));
let segundoNumero = parseFloat(prompt(`Digite seu segundo número`));
let operacao = (prompt(`Digite o valor da operação ("+", "-", "*" ou "/")`));

switch (operacao) {
    case "+":
        let conta1 = primeiroNumero + segundoNumero;
        alert(`o valor da sua conta é ${conta1}`);
        break;
    case "-":
        let conta2 = primeiroNumero - segundoNumero;
        alert(`o valor da sua conta é ${conta2}`);
        break;
    case "*":
        let conta3 = primeiroNumero * segundoNumero;
        alert(`o valor da sua conta é ${conta3}`);
        break;
    case "/":
        let conta4 = primeiroNumero / segundoNumero;
        alert(`o valor da sua conta é ${conta4}`);
        break;
    default:
        alert("Operação inválida");
        break;
}