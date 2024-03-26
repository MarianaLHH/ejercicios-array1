/*-----------------------COMO CREAR LAS FUNCIONES BASICAS DE EJERCICIO DE README O1-----------------------------------------------------
//Botones
const createButton = document.getElementById("createButton");
const deleteButton = document.getElementById("deleteButton");
//Eventos
// primer parametro :string
createButton.addEventListener("click", () => {
  console.log("click");
});

//Crear elementos con js
//Crear etiqueta p
const parrafo = document.createElement("p"); //Ya se crea un elemnto html con js pero aun no se  ve hasta incrustarla en html para ello escribimos :const parrafo=

//Agrego texto a mi etiqueta p
parrafo.textContent = "Texto dentro del parrafo";

//Buscar div con el id contenedor
const contenedor = document.getElementById("contenedor"); //Se busca al elemento en html por medio de : getElementById

//Dentro del div contenedor meti parrafo <p>
contenedor.appendChild(parrafo); //Funcion dentro del elemento contenedor agregara algo,lo que le idicamos

//Borrar contenedor
contenedor.remove();
console.log(parrafo);
*/
// Regresara un array(arreglo)
/*import data from "./data.json"; // Para importar el archivo de data.json //En nustro archivo HTML añadimos type="modulo" al script index.js
console.log(data);
const ejercicio1 = () => {
  return 1;
};
*-----------------TERMINA ....................................*/

//Creamos un contenedor
const contendor = document.getElementById("contenedor");
//
let productos = [];
fetch("data.json")
  .then((data) => {
    // Comando que conecta al data.son para cargar un json
    return data.json();
  })
  .then((data) => {
    productos = data;
  }); // imprime: Array(100)

//Pide un producto y los muestra en el DOM
const mostrarProductos = (productos) => {
  /**
   * [productos] -> [divs]
   * mostrar los divs de productos
   */
  contendor.innerHTML = "";

  const productosDiv = productos.map((producto, productoIndex) => {
    const productoDiv = document.createElement("div"); //Creando un div("div")
    productoDiv.classList.add("producto"); //Agregando la clase producto al div con .classList.add-->("producto")asi se llama la clase

    //Para enumerar cada div recurrimos a una propiedad el map( ,index(productoIndex))
    const index = document.createElement("p");
    index.textContent = "No" + (productoIndex + 1); //Se concatena con la propiedad index de map(productoIndex) y le sumamos +1 para q empiece en uno.
    productoDiv.appendChild(index);

    const nombreP = document.createElement("p"); //Creamo las etiquetas p para nuestro contenido de :<div class="producto">
    nombreP.textContent = producto.product_name; // ¿Producto es del array o de la clase?
    productoDiv.appendChild(nombreP); // Para que mi etiqueta p este dentro del div con:appenChil()

    const precioP = document.createElement("p");
    precioP.textContent = producto.price;
    productoDiv.appendChild(precioP);

    const stockP = document.createElement("p");
    stockP.textContent = producto.quantity_in_stock;
    productoDiv.appendChild(stockP);

    const fabricanteP = document.createElement("p");
    fabricanteP.textContent = producto.manufacturer;
    productoDiv.appendChild(fabricanteP);

    const categoriaP = document.createElement("p");
    categoriaP.textContent = producto.category;
    productoDiv.appendChild(categoriaP);

    return productoDiv; // retornando
  }); // Se usa funcion map para convertir en este caso un arreglo array a div
  // Se  usa ForEach para meter en el appenChild() varias veces y (element.-Es cada elementp div que se tiene)
  productosDiv.forEach((element) => {
    // Ya es un arreglo de div
    contendor.appendChild(element); // meter el div al (contenedor.-mismo que esta en el inicio de este archivo)
  });
};
//Pide un [string] y los muestra en el DOM
const mostrarStrings = (strings) => {
  //Borrar contenido de contenedor
  contendor.innerHTML = "";

  //[string] -> [div]
  const stringDivs = strings.map((cadena) => {
    const stringDiv = document.createElement("div");
    stringDiv.textContent = cadena;
    return stringDiv;
  });
  //agregar todos los divs al contenedor
  stringDivs.forEach((stringDiv) => {
    contendor.appendChild(stringDiv);
  });
};
// EJERCICIO 1
//USAR FUNCION DE ARRAY
const ejercicio1 = () => {
  contendor.innerHTML = ""; //Para borrar si presionaramos varias veces el boton Ejercicio
  productos.sort((a, b) => {
    //Se hace un sort en un arreglo de prodcutos entonces a y b son productos
    if (a.price < b.price) {
      return 1;
    } else if (b.price < a.price) {
      return -1;
    } else {
      return 0;
    }
    // <0
    //0
    //>0
  });
  //Se debe cambiar un arreglo [producto] a-> <div class="producto"></div>
  //para luego llevarlo al (index.html-->div id contenedor)

  const top10 = productos.slice(0, 10); //Se usa slice para solo elegir los 10 numeros
  // [productos] -> [<div class="producto"></div>]
  mostrarProductos(top10);
};

//EJERCICIO2
const ejercicio2 = () => {
  contendor.innerHTML = "";
  //Convertimos el array[producto] a -->div
  const categoriasArreglo = productos.map((product) => {
    //¿Como sabe que esta llamando a los productos de data.json-->(product)?
    //product refiriendonos a los productos e :data.json
    return product.category; //Lo que queremos que llene el nuevo arreglo
  });
  //Filtrar con Filter
  const categoriasFiltradas = categoriasArreglo.filter((categoria, index) => {
    return categoriasArreglo.indexOf(categoria) == index;
  });

  /* ANTES SE HACIA DE ESTA MANERA PERO AL CREAR LA FUNCION PARA EL DOM SE ACORTO E L CODIGO
   Convertimos categotias a -->div
  const categoriaDivs = categoriasFiltradas.map((categoria) => {
    const categoriaDiv = document.createElement("div");
    categoriaDiv.textContent = categoria; //Para que este dentro del div(categoriaDiv) creado la categoria
    return categoriaDiv; //Regresar elementos con los que quiero llenar el nuevo arreglo regresamos el div creado donde ya esta nuestra categoria
  });
  categoriaDivs.forEach((categoriaDiv) => {
    contendor.appendChild(categoriaDiv); //Metemos nuestro (divContendor en el contonedor del index.html)
  });*/

  mostrarStrings(categoriasFiltradas);
};

//EJERCICIO03
const ejercicio3 = () => {
  // convertir el arreglo de productos[productos]-->a un arreglo[produtos stock<100]
  const productosFiltrados = productos.filter((producto) => {
    return producto.quantity_in_stock < 100; //true o false
  });
  //Ordenarlos de menor a mayor precio con sort
  productosFiltrados.sort((prodcutoA, productoB) => {
    return prodcutoA.price - productoB.price;
  });
  //Mostrar en el Dom[productosdOrdenados]-->[div]

  mostrarProductos(productosFiltrados);
};

//EJERCICIO4
const ejercicio4 = () => {
  //top 5 productos más caros
  productos.sort((productoA, productoB) => {
    return productoB.price - productoA.price;
  });

  const top5 = productos.slice(0, 5);

  //[productos] -> [strings MAYUS]
  //manufacturer -> mayus

  const fabricantes = top5.map((producto) => {
    return producto.manufacturer.toUpperCase();
  });

  //[string] -> [divs]
  mostrarStrings(fabricantes);
};
//EJERCICIO 5
const ejercicio5 = () => {
  //Precio promedio de los productos
  //[productos] -> number

  //calcular suma
  const suma = productos.reduce((acu, producto) => {
    return acu + producto.price;
  }, 0);

  //dividir entre longitud de arreglo
  const promedio = suma / productos.length;

  //mostrarlo en el DOM

  contendor.innerHTML = "";

  const promedioP = document.createElement("p");
  promedioP.textContent = "Promedio: " + promedio.toFixed(2);

  contendor.appendChild(promedioP);
};

//Crear boton EJERCICIO1
const ejercicio1Button = document.getElementById("ejercicio1");
ejercicio1Button.addEventListener("click", ejercicio1);

//Crear boton EJERCICIO2
const ejercicio2Button = document.getElementById("ejercicio2");
ejercicio2Button.addEventListener("click", ejercicio2);

//Crear boton EJERCICIO3
const ejercicio3Button = document.getElementById("ejercicio3");
ejercicio2Button.addEventListener("click", ejercicio3);

//Crear boton EJERCICIO3
const ejercicio4Button = document.getElementById("ejercicio4");
ejercicio2Button.addEventListener("click", ejercicio4);

//Crear boton EJERCICIO3
const ejercicio5Button = document.getElementById("ejercicio5");
ejercicio2Button.addEventListener("click", ejercicio5);
