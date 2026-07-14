let figura = prompt(`Digite uma figura geométrica (quadrado, retangulo ou circulo)`);
switch (figura) {
    case "quadrado":
        let lado1 = parseFloat(prompt("insira o valor do primeiro lado do quadrado"));
        let lado2 = parseFloat(prompt("insira o valor do segundo lado do quadrado"));
        alert(`O valor da área do quadrado é` +  lado1 * lado2);
        break;
    case "retangulo":
        let baseR = parseFloat(prompt("insira o valor da base do retangulo"));
        let altura = parseFloat(prompt("insira o valor da altura do retangulo"));
        alert(`O valor da área do retangulo é` +  baseR * altura);
        break;
    case "circulo":
        let raio = parseFloat(prompt("insira o valor do raio do círculo"));
        alert(`O valor da área do círculo é` +  3.14 * (raio**2));
        break;
    default:
        alert("Opção inválida");
        break;
}