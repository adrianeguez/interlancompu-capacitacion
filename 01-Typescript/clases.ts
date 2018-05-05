class Usuario{
    private _nombre:string;
    edad:number;
    private _casado:boolean;
    constructor(
        nombre:string,
        edad:number,
        casado:boolean
    ){
        this._nombre = nombre;
        this.edad = edad;
        this._casado= casado;
    }

    set nombre(nuevoNombre:string){
        this._nombre = nuevoNombre;
    }

    get nombre():string{
        return this._nombre;
    }

    public toString():string{
        return `Mi nombre es ${this._nombre},
         mi edad es ${this.edad} y 
        ${this._casado?'estoy casado':'no estoy casado'}`
    }
}

let adrianUsuario:Usuario = new Usuario(
    'Adrian',
    28,
    false
);
console.log(adrianUsuario.toString());
console.log(adrianUsuario);
console.log(adrianUsuario);


export class UsuarioV2 {
    constructor(public nombre:string,
                public edad:number,
                public nombrePais= 'Ecuador',
                public casado?:boolean){
    }
}
export let usuarioV2 = new UsuarioV2('Adrian',28,undefined,true);
console.log(usuarioV2.nombrePais);

let usuarioV2ConJson:UsuarioInterface = {
    nombre:'Adrian',
    edad:28,
    nombrePais:'Ecuador',
    casado:false,
    imprimir:()=>'true'
}

export interface UsuarioInterface {
    nombre:string;
    casado?:boolean;
    esposa?:UsuarioV2;
    nombrePais?:string;
    edad:number;
     imprimir(nombre:string):string;
}




