let valor = parseFloat(prompt("Insira o valor do seu dinheiro (em reais)"));
let moeda = prompt("Qual a sua moeda desejada? (D, E, L ou P)");
switch (moeda.toUpperCase()) {
    case "D":
        let conta1 = valor / 5.60;
        alert(`O seu valor conversível para dólar ficará ${conta1.toFixed(2)}`);
        break;
    case "E":
        let conta2 = valor / 6.45;
        alert(`O seu valor conversível para euro ficará ${conta2.toFixed(2)}`);
    case "L":
        let conta3 = valor / 7.55;
        alert(`O seu valor conversível para libra ficará ${conta3.toFixed(2)}`);
    case "P":
        let conta4 = valor / 0.005;
        alert(`O seu valor conversível para peso argentino ficará ${conta4.toFixed(2)}`);
        break;
    default:
        alert("moeda inválida.");
        break;
}