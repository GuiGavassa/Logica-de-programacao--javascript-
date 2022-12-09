function calcu() {
    const dia = new Date();
    const mes = new Date();
    const ano = new Date();

    let MesNas = parseInt(document.getElementById("MesNas").value);
    let DiaNas = parseInt(document.getElementById("DiaNas").value);
    let AnoNas = parseInt(document.getElementById("AnoNas").value);

    let DifMes = mes.getMonth() - MesNas;
    let DifDia = dia.getDate() - DiaNas;
    let DifAno = ano.getFullYear() - AnoNas;

    if (DifMes <= 0) {
        DifMes = DifMes * (-1);
    }
    if (DifDia <= 0) {
        DifDia = DifDia * (-1);
    }

    let IdadeEmDias = (DifAno * 360) + (DifMes * 30) + DifDia;

    resultado.value = IdadeEmDias;
}