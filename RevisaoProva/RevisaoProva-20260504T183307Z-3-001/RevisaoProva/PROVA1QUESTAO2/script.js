let pagMaterial = parseInt(
  prompt(`Dê um valor para o número de páginas de um material`),
);
let quantCopias = parseInt(prompt(`Coloque a quantidade de cópias`));
let custoPagina = parseFloat(
  prompt(`Dê um valor para o custo por página impressa`),
);
let percenTaxaAdicional = parseFloat(
  prompt(`Dê um valor para o percentual de taxa adicional`),
);
let totalPaginas = pagMaterial * quantCopias;
let custoBase = totalPaginas * custoPagina;
let valorTaxa = (custoBase * percenTaxaAdicional) / 100;
let custoFinal = custoBase + valorTaxa;
alert(`O total de páginas impressas é ${totalPaginas}`);
alert(`O custo base é de ${custoBase} RS`);
alert(`O valor da taxa é de ${valorTaxa} RS`);
alert(`O custo final é de ${custoFinal} RS`);
