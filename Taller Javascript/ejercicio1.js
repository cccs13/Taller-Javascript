/*
 *
 * Ejercicio 1: Implemente una funcion que retorne la suma de todos los elementos en el arreglo.
 *
 * Autor: Cristian Camilo Correa Serna
 * Fecha: 
 *
 */
 
var arraySum = function(array) {
	var respuesta = 0;
  for(var i=array.length-1; i>=0; i--){
  	respuesta += array[i];
  }
  return respuesta;
};

// Prueba (No modificar)

var a = [7, 6, 5, 4, 3];
var b = [-3, -4, -5, -6, -7];
var c = [33];

if (arraySum(a) === 25 &&
    arraySum(b) === -25 &&
    arraySum(c) === 33) {
  console.log('Ejercicio 1 paso la prueba!');
} else {
  console.log('Ejercicio 1 no paso la prueba!');
}
