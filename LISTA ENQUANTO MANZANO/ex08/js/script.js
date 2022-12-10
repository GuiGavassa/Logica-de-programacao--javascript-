function calcu() {
    let celsius = 10
    let fahrenheit = 0
    
    document.write("APERTE F5 PARA VOLTAR </br></br>")

    while (celsius <=100) {
        fahrenheit = ((9*celsius)+160)/5
        document.write(celsius + "°C = " + fahrenheit +"°F </br>")

        celsius = celsius + 10;
    }
}