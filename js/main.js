function converter() {
	var respuesta = document.getElementById('fahrenheit').value;
  var calculo = (respuesta - 32) * 5/9;
	document.getElementById('celsius').value = (calculo).toFixed(2);
}

function converter2() {
	var respuesta2 = document.getElementById('celsius').value;
  var calculo2 = (respuesta2 * 9/5) + 32;
	document.getElementById('fahrenheit').value = (calculo2).toFixed(2);
}
