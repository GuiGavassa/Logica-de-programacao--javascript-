let combustivel = prompt("Informe o tipo de combustível que deseja abastecer! Digite a letra A para álcool ou G para gasolina: ");
let Lvendidos = parseInt(prompt("Informe quantos litros deseja abastercer: "));

let A = 2.90;
let G = 3.30;

if (combustivel == "A" && Lvendidos <= 20) {
    let total = Lvendidos * A;
    let descontoA = 0.03 * total;
    let Vpagar = total - descontoA;
    document.write(Vpagar.toFixed(2));
}
else if (combustivel == "A" && Lvendidos > 20) {
    let total = Lvendidos * A;
    let descontoA = 0.05 * total;
    let Vpagar = total - descontoA;
    document.write(Vpagar.toFixed(2));
}
else if (combustivel == "G" && Lvendidos <= 20) {
    let total = Lvendidos * G;
    let descontoG = 0.04 * total;
    let Vpagar = total - descontoG;
    document.write(Vpagar.toFixed(2));
}
else if (combustivel == "G" && Lvendidos > 20) {
    let total = Lvendidos * G;
    let descontoG = 0.06 * total;
    let Vpagar = total - descontoG;
    document.write(Vpagar.toFixed(2));
}

