let consumo = prompt("Qual o valor do seu consumo em kWh?")
let categoria = prompt("Qual a sua categoria? (R, C ou I)");
switch (categoria.toUpperCase()) {
    case "R":
        let conta1 = 0.82 * consumo;
        alert(`A sua categoria é: Residencial, o seu valor por kWh ficará ${conta1.toFixed(2)}`);
        break;
    case "C":
        let conta2 = 0.95 * consumo;
        alert(`A sua categoria é: Comercial, o seu valor por kWh ficará ${conta2.toFixed(2)}`);        
        break;
    case "I":
        let conta3 = 0.73 * consumo;
        alert(`A sua categoria é: Industrial, o seu valor por kWh ficará ${conta3.toFixed(2)}`);       
        break;
    default:
        alert("Categoria inválida.");
        break;
}