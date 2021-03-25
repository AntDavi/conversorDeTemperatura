function converter () {
  var temperaturaEmCelsius = parseFloat(document.getElementById('temperatura').value);


  var temperaturaEmKelvin = temperaturaEmCelsius + 273.15

  document.getElementById('temperaturaEmKelvin').innerHTML = temperaturaEmKelvin + "K";
}


//var temperaturaEmCelsius = parseFloat(prompt("Qual a temperatura em Celsius(°C)"))

//temperaturaEmKelvin = temperaturaEmCelsius + 273.15

//alert(temperaturaEmCelsius + " °C em Kelvin é " + temperaturaEmKelvin.toFixed(2) + " K")