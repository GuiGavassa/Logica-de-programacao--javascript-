let nota1 = parseFloat(prompt("Informe a primeira nota: "));
let nota2 = parseFloat(prompt("Informe a segunda nota: "));
let nota3 = parseFloat(prompt("Informe a terceira nota: "));
let media = 3.5;
let aprovado = ((((nota1 + nota2) * 2) + nota3) * 3 + media) / 7;

if (aprovado >= 9.0) {
    document.write("Aluno nota A");
}
else if (aprovado >= 7.5) {
    document.write("Aluno nota B");
}
else if (aprovado >= 6.0 && aprovado < 7.5) {
    document.write("Aluno nota C")
}
else {
    document.write("Aluno nota D")
}
