let horainicio = parseFloat(prompt("Informe o horário de início do jogo: "));
let horafim = parseFloat(prompt("Informe o horário do término do jogo: "));
let jogoemhoras = horafim - horainicio;

if (jogoemhoras < 0) {
    jogoemhoras = jogoemhoras + 24;

    alert("O jogo teve duração de: " + jogoemhoras + " horas!");
}
else {
    alert("O jogo teve duração de: " + jogoemhoras + " horas!");
}