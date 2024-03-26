console.log("archivo cargado");

const a = [1, 2, 3];
/**
 * .push agrega un elemento a un arreglo
 */

/*let al = [2, 3, 4, 5];
console.log(al.join(2));
console.log(al);
*/
//callback.-son fucines que se pasan como parametro

/*function name(num1,num2){
    return

}
. .-Es un operador
*/

//-------------FUNCION FOREACH---------------------------
//ForEacch no rgresa nada
//Ejemplo 1:
//const nums = [6, 3, 7, 9, 5, 4, 8];
//nums.forEach((value, index, array) => {
//console.log("valor actual", value); //Solo imprime value
//console.log("index del valor", index); //Imprime el numero del array y su posicion(index)de cada numero
// console.log("indice", index, "valor:", value, "array:", array); //Imprime de distinta manera dos parametros(index,value,array)
//});

//Ejemplo 2:
/*const stringhs = ["hola", "mundo"];
stringhs.forEach((value) => {
  console.log(value);
});
*/

//-----------FUNCION SORT----------------------------------
//El sort ,pide un callback y si modifica el arreglo original

/*x < 0 < x
   a antes que b regresar <0
   b antes que a regresar >0
   a y b son igaules regresar 0
   */

/* Una forma de declarar.................................
console.log(nums); //Imprime array desordenado
nums.sort((a, b) => {
  if (a < b) {
    //solo cambia a>b para un orden descendente
    return -1;
  } else if (b < a) {
    //solo cambiar b>a para un orden descendente
    return 1;
  } else {
    return 0;
  }
});
//console.log(nums); //imprime array ordenado de forma ascendente
*/
/* Una forma de declarar......................................
console.log(nums);
nums.sort((a, b) => {
  // a=5  y b=3
  return a - b;
});
console.log(nums);
*/

//Una forma de imprimir directamente si tan solo fuese un ordenamiento de numeros
/*
console.log(nums);
nums.sort();
console.log(nums);
*/
//---------------FUNCION REDUCE---------------------------------
//Reducir de otra manera
/*
let contador = 0;
nums.forEach((value, index, array) => {
  //forEach no regresa nada
  //no es necesario en este caso el index,array
  contador = contador + value;
  //contador+=value
});
console.log("suma total del arreglo", contador);
*/
//usando reduce
/* SUMA
const nums = [6, 3, 7, 9, 5, 4, 8];
const resultado = nums.reduce((prev, current, index, array) => {
  return prev * current; //
}, 1); //regresa un valor 0 es prev y current el valor del array [1,2,3] 1.-ES CURENT   ,0.-ES EL PREV
console.log("es", resultado);
*/
/*Multiploacion
const nums = [6, 3, 7, 9, 5, 4, 8];
const resultado = nums.reduce((prev, current, index, array) => {
  return prev * current; //
}, 1); //regresa un valor 0 es prev y current el valor del array [1,2,3] 1.-ES CURENT   ,0.-ES EL PREV
console.log("es", resultado);
*/
//----------------FUNCION FILTER---------------------------------------------
/*Regresa un boleano
regresar true si cumple con el filtro
regresa false si no cumple con el filtro*/
/*
const nums = [6, 3, 7, 9, 5, 4, 8];
nums.filter((value) => {
  return value > 5;
});
console.log(nums);// Al imprimir no se ve ningun cambio
*/
/*
const nums = [6, 3, 7, 9, 5, 4, 8];
const resultado = nums.filter((value) => {
  //lo guardamos en una constante
  return value > 5;
});
console.log(resultado); // Al imprimir se ve el filtro que se hizo
*/
/*
const nums = [6, 3, 7, 9, 5, 4, 8];
const resultado2 = nums.filter((value) => {
  return value % 2 == 0; // si bien % es un operador matematico el == lo finaliza como boolean
});
console.log(resultado2);
*/
//----------------Map-------------------
/*
const nums = [6, 3, 7, 9, 5, 4, 8];
const resultado = nums.map((value) => {
  return value * 2; // lon que reemplaza en cada value del array
});
console.log(resultado);
*/
/*
const nums = [6, 3, 7, 9, 5, 4, 8];
const resultado = nums.map((value) => {
  return value + 1;
});
console.log(resultado);
*/

//JSON=javascript Object notation

//-------------------FUNCION INDEX OF---------------------------------
//Regresa el index del elemento,busca elementos dentro de un arreglo
//Si hubiese dos o mas elementos repetidos regresa el index del primer elemento
// Si no hubiese el elemento¨regresa (-1)
