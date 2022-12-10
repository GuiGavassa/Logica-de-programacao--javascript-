function calcu() {

    let resultado = 0
    let contadora = 0
    let auxiliar = 0

    while (contadora <= 100) {
        resultado = contadora+auxiliar;
        auxiliar = resultado;
        
        contadora++;
    }
    result.value = resultado;
}