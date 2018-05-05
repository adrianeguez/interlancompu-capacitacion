import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsuarioService {
  url = 'http://localhost:1337/';
  modelo = 'Usuario';
  constructor(private _http:Http) { }

  crearUsuario(usuario){
    return this._http.post(this.url + this.modelo,usuario);
  }

  consultarGoogle(){
    return this._http.get('http://www.google.com');
  }

}
