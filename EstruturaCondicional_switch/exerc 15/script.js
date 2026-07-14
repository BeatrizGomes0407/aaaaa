let sigla = prompt(`Digite a sigla do seu estado (S, N, SE, CO ou NE)`);
switch (sigla.toUpperCase()) {
    case "S":
        alert(`Você é da região sul, o valor do seu frete é de RS20.00`);
        break;
    case "N":
        alert(`Você é da região norte, o valor do seu frete é de RS45.00`);
        break;
    case "SE":
        alert(`Você é da região sudeste, o valor do seu frete é de RS25.00`);
        break;
    case "CO":
        alert(`Você é da região centro-oeste, o valor do seu frete é de RS35.00`);
        break;
    case "NE":
        alert(`Você é da região nordeste, o valor do seu frete é de RS40.00`);
        break;
    default:
        alert("Região de entrega inválida.");
        break;
}