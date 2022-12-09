let qtdmorangos = parseFloat(prompt("Informe a quantidade (em kg) de morangos: "));
let qtdmacas = parseFloat(prompt("Informe a quantidade (em kg) de maçãs: "));

let preco1morango = qtdmorangos * 2.50;
let preco1maca = qtdmacas * 1.80;
let preco2morango = qtdmorangos * 2.20;
let preco2maca = qtdmacas * 1.50;
let total1 = preco1morango + preco1maca;
let total2 = preco2morango + preco2maca;

if (qtdmorangos <=5 && qtdmacas<=5) {
    document.write("O valor total é igual a: " + total1.toFixed(2));
}
else if (total2 >= 25) {
    let desconto= total2*0.1;
    vfinal=total2-desconto;
    document.write("O valor total é igual a: " + vfinal.toFixed(2));
}
else if (qtdmorangos > 5 && qtdmorangos<8 && qtdmacas > 5 && qtdmorangos < 8) {
    document.write("O valor total é igual a: " + total2.toFixed(2));
}
else if (qtdmorangos > 5 && qtdmorangos<8 && qtdmacas > 5 && qtdmorangos < 8) {
    document.write("O valor total é igual a: " + total2.toFixed(2));
}
else if (qtdmorangos > 8 &&  qtdmacas > 8) {
    let desconto=total2*0.01;
    let vfinal=total2-desconto;
    document.write("O valor total é igual a: " + vfinal.toFixed(2));
}
