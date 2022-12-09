let a = parseInt(prompt("Informe o valor do lado A: "));
let b = parseInt(prompt("Informe o valor do lado B: "));
let c = parseInt(prompt("Informe o valor do lado C: "));


if (a < b+c && b <a+c && c <a+b) {

    if (a==b && b==c) {
        var mens= "Triângulo Equilátero";
    }
    else if (a==b || b==c || a==c) {
        var mens= "Triângulo Isósceles";
        document.write("Com o valor dos lados informados, é possível formar um " + mens);
    } 
    else {
        var mens= "Triângulo Escaleno";
        document.write("Com o valor dos lados informados, é possível formar um " + mens);
    }

} 
else{
    document.write("Não é possível formar um triângulo!")
}

         
