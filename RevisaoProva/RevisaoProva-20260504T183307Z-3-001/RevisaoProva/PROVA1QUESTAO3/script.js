let diasUso = parseInt(prompt(`Insira o número de dias de uso no mês`));
let horasUso = parseFloat(prompt(`Insira as horas de uso por dia`));
let consuEquip = parseFloat(
  prompt(`Insira o consumo de equipamento em kWh por hora`),
);
let custokWh = parseFloat(prompt(`Dê um valor para o custo do kWh`));
let taxaFixaMensal = parseFloat(
  prompt(`Dê um valor de taxa fixa mensal de manutenção`),
);
let totalHoras = diasUso * horasUso;
let consumoEnergia = consuEquip * totalHoras;
let custoEnergia = consumoEnergia * custokWh;
let custoTotal = custoEnergia + taxaFixaMensal;
alert(`O total de horas de uso é ${totalHoras}`);
alert(`O consumo total de energia é ${consumoEnergia}`);
alert(`O custo com energia é de ${custoEnergia} RS`);
alert(`O custo total é de ${custoTotal} RS`);
