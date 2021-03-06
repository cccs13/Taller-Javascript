/*
 *
 * Ejercicio 2: Dado un arreglo de personas, retorne el color de cabello de la personaa mas edad.
 *
 * Una persona es un objeto con los siguientes atributos:
 *    nombres: String
 *    apellidos: String
 *    edad: Number
 *    colorCabello: String
 *
 * Autor:
 * Fecha: 
 *
 */

var colorCabello = function(personas) {
 
  if (personas.length > 1) {
     var temporal=0;
     var temporalColor="";
    for (var i = 0; i<personas.length; i++) {
      
      if (temporal==0) {
        if (personas[i].edad > personas[i+1].edad) {
          temporal=personas[i].edad;
          temporalColor=personas[i].colorCabello;
        }else{
          temporal=personas[i+1].edad;
          temporalColor=personas[i+1].colorCabello;
        }
      }else{
        if (temporal >= personas[i].edad) {
          return temporalColor;
        }else{
          return personas[i+1].colorCabello;
        }
      }

      }
    }else{
      return personas[0].colorCabello;
    }
  };

// Prueba (No modificar)

var persona1 = {
  nombres: 'Kirk',
  apellidos: 'Hummer',
  edad: 27,
  colorCabello: 'Rubio'
};
var persona2 = {
  nombres: 'Homero',
  apellidos: 'Simpson',
  edad: 30,
  colorCabello: 'Cafe Oscuro'
};
var persona3 = {
  nombres: 'Eric',
  apellidos: 'Cartman',
  edad: 10,
  colorCabello: 'Cafe'
};
var persona4 = {
  nombres: 'Rick',
  apellidos: '-',
  edad: 105,
  colorCabello: 'Azul'
};

var personas1 = [persona1];
var personas2 = [persona1, persona3];
var personas3 = [persona1, persona2, persona3];
var personas4 = [persona3, persona4];

if (colorCabello(personas1) === 'Rubio' &&
    colorCabello(personas2) === 'Rubio' &&
    colorCabello(personas3) === 'Cafe Oscuro' &&
	colorCabello(personas4) === 'Azul') {
  console.log('Ejercicio 2 paso el test!');
} else {
  console.log('Ejercicio 2 no paso el test!');
}
