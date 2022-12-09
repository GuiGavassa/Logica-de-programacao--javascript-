let conta=parseInt(prompt("Digite o número de sua conta: "));
let saldo=parseFloat(prompt("Informe seu saldo: "));
let debito=parseFloat(prompt("Informe o débito disponível em sua conta: "));
let credito=parseFloat(prompt("Informe o crédito disponível em sua conta: "));
let novosaldo = saldo - debito + credito;

if (novosaldo > 0){
 document.write("Saldo positivo!");
} 
else{
 document.write("Saldo negativo!");
}