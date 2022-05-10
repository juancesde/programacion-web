//anonimas
//expreciones en varibles
// si retorno un valor en una sola linea
//solo un parametro entonces sin parentesis
//si no hay parametro _ o parentesis

console.log(()=>{

});

function sumar(num1,num2) {
    return `el numero es: ${num1 + num2}`
}
console.log(sumar(1,1));



const sumar1 = (num1,num2) =>  `el numero es: ${num1 + num2}`

console.log(sumar1(1,2));

const hola = num1 =>{
    console.log(num1);
    return `el numero es: ${num1}`
}  
console.log(hola(1));

const hola1 = _ =>  `el numero es: ${num1}`