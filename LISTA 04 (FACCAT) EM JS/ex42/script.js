let codigo = parseInt(prompt("Digite o seu número de acesso: "));
let ano_nasc = parseInt(prompt("Digite o ano do seu nascimento: "));
let ano_ing = parseInt(prompt("Digite o ano do seu ingresso na empresa: "));

let idade = 2022 - ano_nasc;
let anos_tra = 2022 - ano_ing;

if (idade >= 65) {
    document.write("Você tem " + idade + " anos de idade e " + anos_tra + " anos de registro. </br>");
    document.write("Requer aposentadoria por idade!");
}
else if (anos_tra >= 30) {
    document.write("Você tem " + idade + " anos de idade e " + anos_tra + " anos de registro. </br>");
    document.write("Requer aposentadoria por anos trabalhados!");
}
else {
    document.write("Você tem " + idade + " anos de idade e " + anos_tra + " anos de registro. </br>");
    document.write("Não requer aposentadoria!");
}

