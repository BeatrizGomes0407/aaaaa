let baseTerreno = parseFloat(prompt(`Dê um valor para a base desse terreno`));
let alturaTerreno = parseFloat(
  prompt(`Dê um valor para a altura desse terreno`),
);
let precoMetroQua = parseFloat(prompt(`Dê um preço por metro quadrado`));
let areaTerreno = (baseTerreno * alturaTerreno) / 2;
let precoDivisao = areaTerreno * precoMetroQua;
alert(
  `A área do terreno é ${areaTerreno} e o valor estimado é de ${precoDivisao} RS`,
);
