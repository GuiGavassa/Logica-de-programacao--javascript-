function calcu() {
    document.write("Aperte F5 para voltar. </br></br>")

    let numero = 0
    let soma = 0
    let resultado = 0
    
    do {
        let difNumero = numero % 2;
        if (difNumero == 0) {
            soma = numero+soma
        }
        numero++;
    } while (numero <= 500);
    document.write(soma);
}