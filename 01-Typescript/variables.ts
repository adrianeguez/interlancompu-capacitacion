import { UsuarioInterface } from "./clases";

let edad: number = 2;
let nombre: string = 'Adrian';
let casado: boolean = false;
let caja = null;
let mesa; // undefined



if(edad){
    console.log('Verdadero');
} else {
    console.log('Falso');
}

export function sumarDosNumeros(
    numeroUno: number,
    numeroDos: number
): number{
    return numeroUno + numeroDos;
}
// funciones anonimas
let sumarDosNumerosV2 = function(
    numeroUno: number,
    numeroDos: number
): number{
    return numeroUno + numeroDos;
}

// fat arrow functions
let sumarDosNumerosV3 = (
    numeroUno: number,
    numeroDos: number
): number => {
    return numeroUno + numeroDos;
}


let sumarDosNumerosV = (
    numeroUno: number,
    numeroDos: number
): number => numeroUno + numeroDos;

let potenciaDeDosDeUnNumero = numero => numero * numero;



let adrian = {
    nombre:"Adrian",
    edad:28,
    casado:false,
    // template strings
    imprimirUsuario: (): string => 
    `Mi nombre es ${this.nombre}, mi edad es ${this.edad} y 
    ${casado?'estoy casado':'no estoy casado'}`
}

console.log('Usuario: ', adrian);

console.log(adrian.imprimirUsuario());
console.log(adrian.imprimirUsuario);
console.log(sumarDosNumeros);

let arregloNumeros:Array<number> = [1,2,3,4,5];
let arregloNumerosV2: number[] = [1,2,3,4,5];

let arregloDeTodo = [
    12.23,
    'Adrian',
    true,
    null,
    undefined,
    {
        nombre:'Adrian'
    },
    function(){console.log('Hola mundo');}
    ,
    [1,2,true]
]

// duck typing
let dedos = 20;
dedos = 9;

let imprimirParametrosDelForEach = (valorActual, indiceActual, arreglo)=>{
    console.log('valorActual',valorActual);
    console.log('indiceActual',indiceActual);
    console.log('arreglo',arreglo);
}
arregloNumeros.forEach(
    imprimirParametrosDelForEach
)
declare var jquery;
jquery 
console.log('Edad', typeof edad); // 'number'
console.log('Casado', typeof casado); // 'boolean'
console.log('Nombre', typeof nombre); // 'string'
console.log('Adrian', typeof adrian); // 'object'
console.log('Arreglo', typeof arregloNumeros); // 'object'

let usuario:UsuarioInterface;