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
//Ejemplo 1:
const nums = [1, 3, 7, 9, 5, 4, 8];
nums.forEach((value, index, array) => {
  //console.log("valor actual", value); //Solo imprime value
  //console.log("index del valor", index); //Imprime el numero del array y su posicion(index)de cada numero
  // console.log("indice", index, "valor:", value, "array:", array); //Imprime de distinta manera dos parametros(index,value,array)
});

//Ejemplo 2:
/*const stringhs = ["hola", "mundo"];
stringhs.forEach((value) => {
  console.log(value);
});
*/

//-----------FUNCION SORT----------------------------------
//El sort ,pide un callback

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

console.log(nums); //imprime array ordenado de forma ascendente
/*x < 0 < x
   a antes que b regresar <0
   b antes que a regresar >0
   a y b son igaules regresar 0
   */
