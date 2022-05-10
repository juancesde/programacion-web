var animal= "mapache";
var animal= "aguila";
animal= "iguana";

function PrintAnimal(){
    var animalNuevo="vaca";
}

console.log(animal);


//problema con var
/*var saludar = "hey, hola";
var tiempos = 4;

if (tiempos > 3) {
   // var saludar = "dice Hola tambien"; 
}

console.log(saludar)
*/

//let
//problema con var
/*
let saludar = "hey, hola";
saludar = "nuevo hola";
let tiempos = 4;

if (tiempos > 3) {
    let saludar = "hey, hola nuevo";
    console.log(saludar);
}
console.log(saludar);
*/

const cedula = "1035"
let tiempos = 4;
if (tiempos > 3) {
    console.log(cedula);
}

function numero(num1,num2){
    return `el numero es: ${num1 + num2}` 
  }

  console.log(numero(10,2));


  const mascota = {
      nombre:"tom",
      edad:5,
      tipo:"mapache"
  }

  mascota.raza = 'pincher'
  console.log(mascota);