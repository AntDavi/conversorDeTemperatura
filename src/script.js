function converter () {
  open()

  var temperaturaEmCelsius = parseFloat(document.getElementById('temperatura').value);

  console.log(temperaturaEmCelsius)

  var temperaturaEmKelvin = temperaturaEmCelsius + 273.15

  console.log(temperaturaEmKelvin)

  document.getElementById('temperaturaEmKelvin').innerHTML = temperaturaEmKelvin.toFixed(2) + " K";
}

function open () {
  document
    .querySelector('#temperaturaEmKelvin')
    .classList.add('active')
}


//var temperaturaEmCelsius = parseFloat(prompt("Qual a temperatura em Celsius(°C)"))

//temperaturaEmKelvin = temperaturaEmCelsius + 273.15

//alert(temperaturaEmCelsius + " °C em Kelvin é " + temperaturaEmKelvin.toFixed(2) + " K")