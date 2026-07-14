let categoria = prompt(`Digite o tipo de conversão que você quer fazer (R, C ou I)`);
switch (categoria.toUpperCase()) {
    case "R":
        let rKwh = parseFloat(prompt("Dê as horas de seu kWh"));
        let conta1 = rKwh * 0.75;
        alert(`A energia de quantidade consumida em kWh é ${conta1}`);
        break;
    case "C":
        let cKhw = parseFloat(prompt("Dê as horas de seu kWh"));
        let conta2 = cKhw * 0.92;
        alert(`A energia de quantidade consumida em kWh é ${conta2}`);
        break;
    case "I":
        let iKhw = parseFloat(prompt("Dê as horas de seu kWh"));
        let conta3 = cKhw * 0.68;
        alert(`A energia de quantidade consumida em kWh é ${conta3}`);
        break;
    default:
        alert("Opção de conversão inválida.");
        break;
}