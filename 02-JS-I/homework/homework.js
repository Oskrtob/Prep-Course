// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Hello';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 10;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  var a = str;
  return a;
}
devolverString("Hola");

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var resultado = x + y;
  return resultado;
}
suma(2,3);

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var resultado = x - y;
  return resultado;
}
resta(10,5);

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var resultado = x * y;
  return resultado;
}
multiplica(5,5);

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var resultado = x / y;
  return resultado;
}
divide(10,2);

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( x == y){
    return true;
  }
  return false;
}
sonIguales(2,2);

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length == str2.length) {
    return true;
  }
  return false;
}
tienenMismaLongitud('oso','leo');

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num<90){
    return true;
  }
  return false;
}
menosQueNoventa(40);

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num>50){
    return true;
  }
  return false;
}
mayorQueCincuenta(60);

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var resultado = x % y;
  return resultado;
}
obtenerResto(10,3);

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num%2 == 0){
    return true;
  }
  return false;
}
esPar(10);

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num%2 !== 0){
    return true;
  }
  return false;
}
esImpar(9);

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var resultado = Math.pow(num,2);
  return resultado;
}
elevarAlCuadrado(10);

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var resultado = Math.pow(num,3);
  return resultado;
}
elevarAlCubo(10);

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var resultado = Math.pow(num,exponent);
  return resultado;
}
elevar(5,6);

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var resultado = Math.round(num);
  return resultado;
}
redondearNumero(5.8);

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var resultado = Math.ceil(num);
  return resultado;
}
redondearHaciaArriba(4.1);

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var resultado = Math.random();
  return resultado;
}
numeroRandom();

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  var str;
  if (numero > 0){
    var str = "Es positivo";
    return str;
  }
  if (numero < 0){
    var str = "Es negativo";
    return str;
  }
  return false;
}
esPositivo(8);

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var strEx = `${str}!`;
  return strEx;
}
agregarSimboloExclamacion("Hello world");

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var string = `${nombre} ${apellido}`;
  return string;
}
combinarNombres("Soy","Henry");

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var string = `Hola ${nombre}!`;
  return string;
}
obtenerSaludo("Martin");

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var area = alto * ancho;
  return area;
}
obtenerAreaRectangulo(5,6);

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var perimetro = lado + lado + lado + lado;
  return perimetro;
}
retornarPerimetro(6);


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  var area = (base * altura) / 2;
  return area;
}
areaDelTriangulo(5,7);


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var euroADolar = euro * 1.20;
  return euroADolar;
}
deEuroAdolar(6);

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  var respuesta;
  if(letra.length > 1){
    var respuesta = "Dato incorrecto";
    return respuesta;
  }
  if(letra == "a"){
    var respuesta = "Es vocal";
    return respuesta;
  }
  if(letra == "e"){
    var respuesta = "Es vocal";
    return respuesta;
  }
  if(letra == "i"){
    var respuesta = "Es vocal";
    return respuesta;
  }
  if(letra == "o"){
    var respuesta = "Es vocal";
    return respuesta;
  }
  if(letra == "u"){
    var respuesta = "Es vocal";
    return respuesta;
  }
  var respuesta = "Dato incorrecto";
  return respuesta;
}

esVocal("a");

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
