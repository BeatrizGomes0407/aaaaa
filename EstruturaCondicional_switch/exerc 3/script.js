let codigo = (prompt(`Digite um código ("M", "T" ou "N")`));
switch (codigo.toUpperCase()) {
    case "M":
        alert(`Bom dia!`);
        break;
    case "T":
        alert(`Boa tarde!`);
        break;
    case "N":
        alert(`Boa noite!`);
        break;
    default:
        alert("Código inválido");
        break;
}