let ingressos = prompt("Quantos ingressos vocẽ quer comprar?")
let setor = prompt("Qual o seu setor? (A, B, C ou D)");
switch (setor.toUpperCase()) {
    case "A":
        let conta1 = ingressos * 90;
        alert(`O valor total da sua conta é de RS ${conta1.toFixed(2)}`);
        break;
    case "B":
        let conta2 = ingressos * 150;
        alert(`O valor total da sua conta é de RS ${conta2.toFixed(2)}`);
    case "C":
        let conta3 = ingressos * 250;
        alert(`O valor total da sua conta é de RS ${conta3.toFixed(2)}`);
    case "D":
        let conta4 = ingressos * 400;
        alert(`O valor total da sua conta é de RS ${conta4.toFixed(2)}`);
        break;
    default:
        alert("Setor inválido.");
        break;
}