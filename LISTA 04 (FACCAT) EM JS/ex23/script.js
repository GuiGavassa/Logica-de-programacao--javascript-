var nome = String(prompt("Digite seu nome: "));
var sexo = String(prompt("Digite seu sexo [F/M]: "));
var altura = parseFloat(prompt("Digite sua altura: "));

if (sexo == "M") {
    var peso = (72.7 * altura) - 58;
    document.write("O peso ideal para sua altura é: " + peso.toFixed(3) + "kg");
}
else {
    var peso = (62.1 * altura) - 44.7;
    document.write("O peso ideal para sua altura é: " + peso.toFixed(3) + "kg");
}