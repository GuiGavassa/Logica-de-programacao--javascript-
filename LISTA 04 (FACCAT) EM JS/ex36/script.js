var homem1 = parseInt(prompt("Informe a idade do 1° homem: "));
var homem2 = parseInt(prompt("Informe a idade do 2° homem: "));
var mulher1 = parseInt(prompt("Informe a idade do 1ª mulher: "));
var mulher2 = parseInt(prompt("Informe a idade do 2ª mulher: "));

if (homem1 > homem2) {
    var homemV = homem1;
    var homemN = homem2;
}
else {
    var homemV = homem2;
    var homemN = homem1;
}
if (mulher1 > mulher2) {
    var mulherV = mulher1;
    var mulherN = mulher2;
}
else {
    var mulherV = mulher2;
    var mulherN = mulher1;
}

var soma = mulherV + homemN;
var produto = homemV * mulherN;

document.write("A soma do homem mais velho com a mulher mais nova é: " + soma + "</br>");
document.write("O produto das idades do homem mais novo com a mulher mais velha é: " + produto);