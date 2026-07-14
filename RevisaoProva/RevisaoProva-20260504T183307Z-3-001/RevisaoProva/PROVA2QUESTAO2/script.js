let numeroDisciplinas = parseInt(prompt(`Insira o número total de disciplinas`));
let horasEstudoDia = parseFloat(prompt(`Insira as horas de estudo de disciplina por dia`));
let numeroDiaEstudos = parseInt(prompt(`Insira o número de dias de estudo`));
let totalHoras = (horasEstudoDia*numeroDiaEstudos);
let totalHorasPeriodo = (totalHoras/numeroDisciplinas)
alert(`O total de horas estudadas por dia é de ${totalHoras} horas`);
alert(`O total de horas no período é de ${totalHorasPeriodo} horas`);