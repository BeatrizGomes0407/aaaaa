const valorG = 5.65
const valorE = 4.38
let tipo = (prompt("Insira o tipo da sua gasolina, (G ou E").toUpperCase());
let capacidade = (prompt("Insira o valor da sua capacidade do tanque em L"))
let valorTotal;

if (tipo == "G") {
    valorTotal = capacidade * valorG;
} else if (tipo == "E") {
    valorTotal = capacidade * valorE
} else {
    alert("Tipo de combustível inválido!")
}