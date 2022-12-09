let A = parseFloat(prompt("Informe o valor de A: "));
let B = parseFloat(prompt("Informe o valor de B: "));
let C = parseFloat(prompt("Informe o valor de C: "));

if (A + B < C && B + C < A && A + C < B) {
    document.write("Pode criar um triângulo!");
}
else {
    document.write("Não pode formar um triângulo!");
}


