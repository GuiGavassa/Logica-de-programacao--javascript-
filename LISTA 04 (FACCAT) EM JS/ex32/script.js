let timeA = prompt("Informe o nome do primeiro time: ");
let timeB = prompt("Informe o nome do segundo time: ");
let golsA = parseInt(prompt("Informe quantos gols o primeiro time fez: "));
let golsB = parseInt(prompt("Informe quantos gols o segundo time fez: "));

if (golsA > golsB) {
    document.write("O " + timeA + " venceu de " + golsA + " a " + golsB);

} else if (golsB > golsA) {
    document.write("O " + timeB + " venceu de " + golsB + " a " + golsA);

} else {
    document.write("Houve um empate!")
}