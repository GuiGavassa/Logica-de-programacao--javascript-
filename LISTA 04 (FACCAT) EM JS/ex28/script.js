let A=parseFloat(prompt("Informe o valor de A: "));
let B=parseFloat(prompt("Informe o valor de B: "));
let C=parseFloat(prompt("Informe o valor de C: "));

if (A > B && A > C){
  document.write("O número "  + A + " é maior.");
}
else if (B > A && B > C){
  document.write("O número "  + B + " é maior.");
}
else{
  document.write("O número "  + C + " é maior.");
}