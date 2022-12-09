function calcu() {
    let qtdEleitores = parseFloat(document.getElementById("qtdEleitores").value);
    let qtdVotosBrancos = parseFloat(document.getElementById("qtdVotosBrancos").value);
    let qtdVotosNulos = parseFloat(document.getElementById("qtdVotosNulos").value);
    let qtdVotosValidos = parseFloat(document.getElementById("qtdVotosValidos").value);

    let pVb = qtdVotosBrancos/qtdEleitores * 100;
    let pVn = qtdVotosNulos/qtdEleitores * 100;
    let pVv = qtdVotosValidos/qtdEleitores * 100;

    vb.value = (pVb + "%");
    vn.value = (pVn + "%");
    vv.value = (pVv + "%");
}