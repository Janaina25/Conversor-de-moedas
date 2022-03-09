function converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    console.log(valorEmDolarNumerico);

    var valorEmReal = valorEmDolarNumerico * 5;
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em Real é R$ " + valorEmReal 
    elementoValorConvertido.innerHTML = valorConvertido

    var valorEmEuroNumerico = parseFloat(valor);
    
    console.log(valorEmEuroNumerico);

    var valorEmReal = valorEmEuroNumerico * 5.52;
    console.log(valorEmReal);

    var elementoValorConvertidoEuro = document.getElementById("valorConvertidoEuro")
    var valorConvertidoEuro = "O resultado em Euro é € " + valorEmReal
    elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro
}