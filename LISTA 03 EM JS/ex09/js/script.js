function calculo() {
    let salarioIni = parseFloat(document.getElementById("salarioIni").value);
    let reajuste = parseFloat(document.getElementById("reajuste").value);

    reajuste = reajuste/100;

    let salarioNovo = salarioIni+(salarioIni*reajuste);

    resultado.value = salarioNovo;
}