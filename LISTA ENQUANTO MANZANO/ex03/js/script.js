function calcu() {
    let contadora = 1
    let resultado = 0
    let auxiliar = 0
    let difContadora = 0

    while (contadora <= 500) {
        
        difContadora = contadora % 2
        if (difContadora == 0) {
            resultado = contadora+auxiliar
            auxiliar = resultado
        }
        contadora++;
    }
    result.value = resultado;
}