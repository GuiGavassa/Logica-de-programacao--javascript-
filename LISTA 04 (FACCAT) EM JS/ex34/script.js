let X = parseInt(prompt("Digite o valor X: "));
let Y = parseInt(prompt("Digite o valor Y: "));
let Z = (X * Y) + 5;

if (Z <= 0) {
  let resposta = "A";
  document.write(resposta + "-" + Z);
}
else if (Z <= 100) {
  let resposta = "B";
  document.write(resposta + "-" + Z);
}
else {
  let resposta = "C";
  document.write(resposta + "-" + Z);
}




