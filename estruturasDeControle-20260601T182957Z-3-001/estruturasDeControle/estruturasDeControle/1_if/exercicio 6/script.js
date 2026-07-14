let sexo = parseFloat (prompt("Insira seu gênero, F ou M").toUpperCase);
let altura = parseFloat (prompt("Insira a sua altura em cm"));
let pesoIdeal;
if (sexo === "M") {
    pesoIdeal = (72.7*altura)-58;
} else if (sexo === "F") {
    pesoIdeal = (62.1 * altura)-44.7;
} else {
    alert("Sexo inválido! Digite M ou F")
} if (pesoIdeal !== undefined) {
    alert("Seu peso ideal é" + pesoIdeal.toFixed(2) + "kg");
}

console.log(resultado);