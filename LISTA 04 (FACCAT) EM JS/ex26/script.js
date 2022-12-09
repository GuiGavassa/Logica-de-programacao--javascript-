let vEstoque=parseInt(prompt("Informe a quantidade atual em estoque: "));
let estoqueMax=parseFloat(prompt("Informe a quantidade máxima de estoque: "));
let estoqueMin=parseFloat(prompt("Informe a quantidade mínima de estoque: "));
let mediaEstoque = (estoqueMax + estoqueMin) /2;

if (vEstoque >= mediaEstoque){
 document.write("Não efetuar compra!");
} 
else{
 document.write("Efetuar compra!");
}