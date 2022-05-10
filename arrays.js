var array_personas = ["juan",2,true];
//var temperaturas_cuidades = new Array(new Array (12,10,11), new Array(5,0,2),new Array(10,8,10))
//var colores = new Array();
//var colores = new Array(10);
//console.log(temperaturas_cuidades);
console.log(array_personas[2]); 
array_personas[3]="medellin"
console.log(array_personas)


var colores = ["rojo", "azul", "verde", "amarillo"];
colores.push("negro","blanco","gris")
//colores.push(array_personas);
colores.pop();
console.log(colores);

array_personas.forEach(element => {
    console.log(element);
});

for (let i = 0; i < array_personas.length; i++) {
    const element = array_personas[i];
    console.log(element);
}