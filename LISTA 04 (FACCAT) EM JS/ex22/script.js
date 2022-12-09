let salarioHora = parseInt(prompt("Digite quanto você ganha por hora: "));
let semana1 = parseFloat(prompt("Digite a quantidade de horas trabalhadas na primeira semana: "));
let semana2 = parseFloat(prompt("Digite a quantidade de horas trabalhadas na segunda semana: "));
let semana3 = parseFloat(prompt("Digite a quantidade de horas trabalhadas na terceira semana: "));
let semana4 = parseFloat(prompt("Digite a quantidade de horas trabalhadas na quarta semana: "));

let horas = semana1 + semana2 + semana3 + semana4;
let salario = horas * salarioHora;

if (horas > 160) {
    salarioExtra < -salario + (salario * 5 / 100);
    document.write("O funcionário irá ganhar: " + salarioExtra + " por mês");
}
else {
    document.write("O funcionário irá ganhar: " + salario + " por mês");
}


