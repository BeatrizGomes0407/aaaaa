let saldo = parseFloat(prompt("Insira o seu saldo atual"));
let operacao = parseInt(prompt(`Digite seu código de operação (1, 2 ou 3)`));
switch (operacao) {
    case 1:
        alert(`O seu saldo é ${saldo}`);
        break;
    case 2:
        let saque = parseFloat(prompt("Digite o valor do saque"));
        let novoSaldo = saldo - saque;
        alert(`O seu novo saldo é de ${novoSaldo}`);
        break;
    case 3:
        let deposito = parseFloat("Insira o valor do depósito");
        let novoSaudoD = saldo + deposito;
        alert(`O seu novo saldo é de ${novoSaldoD}`);
        break;
    default:
        alert("Opção inválida.");
        break;
}