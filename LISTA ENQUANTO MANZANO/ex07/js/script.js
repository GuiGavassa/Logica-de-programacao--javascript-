function calcu() {
    document.write("APERTE F5 PARA VOLTAR </br>")

    let contadora = 1;
    let numero1 = 0;
    let numero2 = 1;
    let numero3 = 0;


    document.write("1 </br>");
    while (contadora <=15) {
    numero3 = numero1 + numero2;
    document.write(numero3 + "</br>");
    numero1 = numero2;
    numero2 = numero3;

    contadora++;
    }
}