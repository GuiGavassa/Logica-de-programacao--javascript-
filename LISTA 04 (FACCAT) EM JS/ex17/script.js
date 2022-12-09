let n1=parseFloat(prompt("Informe a primeira nota: "));
let n2=parseFloat(prompt("Informe a segunda nota: "));

let media = (n1 + n2)/2;

if (media >= 6){
 alert("A média do(a) aluno(a) é: " + media + "." + " Aprovado!");
} else{
 alert("A média do(a) aluno(a) é: " + media + "." + " Reprovado!");
}