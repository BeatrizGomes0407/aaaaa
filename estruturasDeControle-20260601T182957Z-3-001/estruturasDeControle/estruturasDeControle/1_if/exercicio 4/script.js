let idade = 19;
let CNH = "Tem";
if(idade >= 18 && CNH == "Não tem"){
    console.log("Desculpe, você tem idade para dirigir porém não tem CNH.");
} else if(idade >= 18 && CNH == "Tem"){
    console.log("Você pode dirigir!");
} else if(idade < 18 && CNH == "Não tem")
{
    console.log("Desculpe, mas você não tem idade nem CNH para dirigir!");
}