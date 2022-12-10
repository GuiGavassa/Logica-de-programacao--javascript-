function calcu() {
    let resultado = 1
    let B = parseInt(prompt("Digite um número"));
    let expoente = parseInt(prompt("Digite outro número"));
    let contadora = 0


    while (contadora<expoente) {
        if (contadora>=0) {
            resultado=resultado*B
        } else {
            if (contadora = 0) {
                contadora++
            }
        }
        contadora++
        document.write(B + " ^ " + contadora + " = " + resultado + "</br>");
    }
}