var num1=parseFloat(prompt("Informe o primeiro valor: "));
var num2=parseFloat(prompt("Informe o segundo valor: "));
var num3=parseFloat(prompt("Informe o terceiro valor: "));

if (num1 > num2) {
  if (num2 > num3) {
    var soma = num1 + num2;
    document.write("O resultado da soma é: " + soma);
  } else {
    var soma = num1 + num3;
    document.write("O resultado da soma é: " + soma);
  }
}
else{
  if (num1 > num3) {
    var soma = num1 + num2;
    document.write("A soma é: " + soma);
  }
  else{
    var soma = num2 + num3;
    document.write("A soma é: "+soma)
  }

}




// if (num1 > num2 && num1 > num3){
//   var maior1 = num1;
// }
// else if (num2 > num3){
//   var maior2 = num2;
// }
// else{
//   var maior2 = num3;
// }
// if (num2 > num1 && num2 > num3) {
//   var maior1 = num2;
// }
// else if (num3 > num1) {
//   var maior2 = num3;
// } 
// else {
//   var maior2 = num1;
// }
// if (num3 > num1 && num3 > num2) {
//   var maior1 = num3;
// }
// else if (num2 > num1) {
//   var maior2 = num2;
// } 
// else {
//   var maior2 = num1;
// }

// var soma = maior1 + maior2;
// document.write(soma)




