// Pedimos al usuario que ingrese su nombre
let nombre = prompt("¿Cuál es tu nombre?");

// Mostramos el mensaje personalizado en la consola
console.log(`¡Hola ${nombre}! Bienvenido al taller de la profe que esta en la USA.`);



// Le pedimos al usuario la edad
let edad = prompt("¿Cuál es tu edad?");

// Usamos const para un mensaje que incluya la edad
const mensaje = `Tu edad es ${edad}`;

// se muestra el mensaje en la consola
console.log(mensaje);



// Declaramos dos variables numéricas
let num1 = 15;
let num2 = 100;

// Usamos una estructura if para comparar las variables
if (num1 > num2) {
  console.log(`${num1} es mayor que ${num2}`);
} else {
  console.log(`${num1} no es mayor que ${num2}`);
}



//explicación 
//si num1 es mayor que num 2 entonces la consola nos arrojara un "es mayor que o no es mayor que :D "

// Pedimos dos números al usuario
let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));


//CALCULADORA
// Preguntamos qué operación desea realizar
let operacion = prompt("¿Qué operación deseas realizar? (suma, resta, multiplicacion, division)");

// Usamos condicionales para realizar la operación seleccionada
if (operacion === "suma") {
  console.log(`El resultado de la suma es: ${numero1 + numero2}`);
} else if (operacion === "resta") {
  console.log(`El resultado de la resta es: ${numero1 - numero2}`);
} else if (operacion === "multiplicacion") {
  console.log(`El resultado de la multiplicacion es: ${numero1 * numero2}`);
} else if (operacion === "división") {
  console.log(`El resultado de la division es: ${numero1 / numero2}`);
} else {
  console.log("Operación no válida");
}


//comparando numeros

// Pedimos dos números al usuario y los convertimos a números usando parseFloat
let numeroA = parseFloat(prompt("Ingresa el primer número:"));
let numeroB = parseFloat(prompt("Ingresa el segundo número:"));

// Verificamos que ambos inputs sean números válidos
if (isNaN(numeroA) || isNaN(numeroB)) {
  console.log("Uno o ambos valores ingresados no son números válidos.");
} else {
  // Comparamos si el primer número es mayor que el segundo
  if (numeroA > numeroB) {
    console.log(`${numeroA} es mayor que ${numeroB}`);
  } else if (numeroA < numeroB) {
    console.log(`${numeroA} es menor que ${numeroB}`);
  } else {
    console.log(`${numeroA} y ${numeroB} son iguales`);
  }
}


//y ya estaria mi profe, no supe como poner condicional en el caso de que al preguntar el nombre si o si tenga que ser texto, porque si pongo un numero me lee ese numero como texto, tambien me pasa lo mismo con la edad, quedo con esa condicional y pues no la pude cambiar, tampoco me quedo muy claro el ultimo punto porque puse las variables como numeroA y numeroB para que no se confundieran con las varibles de arriba pero estan num1, num2. 

//me podrias corregir el ultimo punto por favor o dejarme una notica? :,v 

