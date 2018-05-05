import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

@Injectable()
export class UsuarioService {
  url = 'http://localhost:1337/';
  modelo = 'Usuario';
  constructor(private _http:Http) { }

  crearUsuario(usuario){
    let headers:any = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    let options:any = new RequestOptions({ headers: headers });
    return this._http.post(this.url + this.modelo,usuario,options);
  }

  consultarGoogle(){
    return this._http.get('http://pokeapi.co/api/v2/pokemon/1');
  }

}
