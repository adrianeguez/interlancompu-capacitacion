var Usuario = (function () {
    function Usuario(nombre, edad, casado) {
        this._nombre = nombre;
        this.edad = edad;
        this._casado = casado;
    }
    Object.defineProperty(Usuario.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nuevoNombre) {
            this._nombre = nuevoNombre;
        },
        enumerable: true,
        configurable: true
    });
    Usuario.prototype.toString = function () {
        return "Mi nombre es " + this._nombre + ",\n         mi edad es " + this.edad + " y \n        " + (this._casado ? 'estoy casado' : 'no estoy casado');
    };
    return Usuario;
}());
var adrianUsuario = new Usuario('Adrian', 28, false);
console.log(adrianUsuario.toString());
console.log(adrianUsuario);
console.log(adrianUsuario);
var UsuarioV2 = (function () {
    function UsuarioV2(nombre, edad, nombrePais, casado) {
        if (nombrePais === void 0) { nombrePais = 'Ecuador'; }
        this.nombre = nombre;
        this.edad = edad;
        this.nombrePais = nombrePais;
        this.casado = casado;
    }
    return UsuarioV2;
}());
var usuarioV2 = new UsuarioV2('Adrian', 28);
console.log(usuarioV2.nombrePais);
