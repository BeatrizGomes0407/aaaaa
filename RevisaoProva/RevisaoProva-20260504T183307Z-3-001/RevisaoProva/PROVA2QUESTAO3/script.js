let areaTotalIrrigada = parseFloat(prompt(`Insira um valor para a área total irrigada (em m quadrados)`));
let quantTotalAguaUtilizada = parseFloat(prompt(`Insira um valor para a quantidade total de água utilizada (em litros)`));
let areaSetorEspecifico = parseFloat(prompt(`Insira um valor para a área de um setor específico (em m quadrados)`));
let consumoAguaMetros = (quantTotalAguaUtilizada/areaTotalIrrigada);
let quantAguaUtilizada = (consumoAguaMetros*areaSetorEspecifico);
let diferencaConsumo = (quantAguaUtilizada-500);
alert(`Consumido por metros quadrados: ${consumoAguaMetros.toFixed(2)} litros`);
alert(`Àgua utilizada no setor: ${quantAguaUtilizada.toFixed(2)} litros`);
alert(`Consumido por metros quadrados ${consumoAguaMetros.toFixed(2)} litros`);