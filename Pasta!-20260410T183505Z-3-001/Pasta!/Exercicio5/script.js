let horasTrabalhadasPedreiro = parseFloat(prompt("Informe por quantas horas o pedreiro levou para concluir a mão de obra"));
let horasTrabalhadasPintor = parseFloat(prompt("Informe por quantas horas o pintor levou para concluir a mão de obra"));
let valorPedreiro = (horasTrabalhadasPedreiro*20.00);
let valorPintor = (horasTrabalhadasPintor*16.00)
let total = (valorPedreiro+valorPintor);
alert(`O custo da mão de obra do pedreiro é de ${valorPedreiro} reais`/n);
alert(`O custo da mão de obra do pintor é de ${valorPintor} reais`);
alert(`O custo total da mão de obra de ambos é de ${total} reais`);