var salarioF=parseFloat(prompt("Informe o seu salário fixo: "));
var valorV=parseFloat(prompt("Informe o valor das vendas efetuadas: "));


if (valorV == 0){
 document.write("Caso você não tenha efetuado nenhuma venda, você não receberá comissão esse mês!");
}
 else if(valorV >= 1500){
    var comissao = valorV +(valorV * 3 / 100);
 document.write("Parabéns, você faturou R$" + valorV + " em vendas. Sua comissão é de 3%: R$" + comissao);
}
else{
    var comissao = valorV + (salarioF + valorV * 5 / 100);
 document.write("Parabéns, você faturou R$" + valorV + " em vendas. Sua comissão é de 5%: R$" + comissao);
}

