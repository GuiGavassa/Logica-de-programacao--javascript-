let nome = String(prompt("Digite o nome do produto: "));
let preco = parseFloat(prompt("Informe o preço do produto: "));
let quantidade = parseInt(prompt("Informe a quantidade que deseja comprar: "));

let total = quantidade * preco;

if (quantidade <= 5) {
    var novoValor = total - (total * 2 / 100);
}
else if (quantidade >= 6 && quantidade <= 10) {
    var novoValor = total - (total * 3 / 100);
}
else {
    var novoValor = total - (total * 5 / 100);
}
document.write("O preço a pagar pelo(a) " + nome + " é de: R$ " + novoValor);


