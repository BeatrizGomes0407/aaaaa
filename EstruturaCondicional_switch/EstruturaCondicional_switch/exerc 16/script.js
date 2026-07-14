let quantMeses = prompt("Qual é a quantidade de meses contratados?")
let codigoPlano = prompt("Qual o seu código de plano?(B, P ou E)");
switch (codigoPlano.toUpperCase()) {
    case "B":
        let conta1 = 39.90 * quantMeses;
        alert(`O seu plano é básico, o valor da sua mensalidade é RS39.90, a sua quantidade de meses é ${quantMeses}, o valor total da sua contratação é de ${conta1.toFixed(2)}`);
        break;
    case "P":
        let conta2 = 69.90 * quantMeses;
        alert(`O seu plano é profissional, o valor da sua mensalidade é RS69.90, a sua quantidade de meses é ${quantMeses}, o valor total da sua contratação é de ${conta2.toFixed(2)}`);        
        break;
    case "E":
        let conta3 = 119.90 * quantMeses;
        alert(`O seu plano é empresarial, o valor da sua mensalidade é RS119.90, a sua quantidade de meses é ${quantMeses}, o valor total da sua contratação é de ${conta3.toFixed(2)}`);        
        break;
    default:
        alert("Código invalido.");
        break;
}