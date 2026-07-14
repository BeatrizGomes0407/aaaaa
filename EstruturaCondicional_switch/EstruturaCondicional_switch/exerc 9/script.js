let letra = prompt(`Digite a letra do seu código de transporte (C, M ou B)`);
switch (letra.toUpperCase()) {
    case "C":
        alert("O seu transporte é: Carro");
        break;
    case "M":
        alert("O seu transporte é: Moto");
        break;
    case "B":
        alert("O seu transporte é: Bicicleta");
        break;
    default:
        alert("Código de transporte inválido!");
        break;
}