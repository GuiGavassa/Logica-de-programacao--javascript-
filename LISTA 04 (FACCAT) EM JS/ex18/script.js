let ano=parseFloat(prompt("Informe o ano atual: "));
let anonasc=parseFloat(prompt("Informe em que ano você nasceu: "));
let idade = ano - anonasc;

if (idade >= 16){
 document.write("Você tem: " + idade + " anos</br>");
 document.write("Você pode votar!");
}
else{
 document.write("Você tem: " + idade + " anos</br>");
 document.write("Você não pode votar!");
}