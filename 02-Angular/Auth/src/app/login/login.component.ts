import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password;
  email = '';
  tipoInput = 'password';
  valorCorreo = 'me@yo.com';
  claseBoton = 'btn btn-success';
  colorTextoBoton = '#000';

  constructor(private _usuarioService: UsuarioService,
    private _activatedRoute: ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit() {
    // this._router.navigate(['geolocalizacion']);
    console.log('window.URL',window.location);
    console.log('ruta',this._activatedRoute);
  }

  cambiarColor(){
    // !==
    if(this.claseBoton === 'btn btn-success'){
      this.claseBoton = 'btn btn-danger';
    }else {
      this.claseBoton = 'btn btn-success';
    }
    
  }

  cambioValorCorreo(evento){
    console.log('Evento', evento.target.value + evento.key);
  }
  guardarPassword(objetoPassword,objetoCorreo){
    console.log('objetoPassword', objetoPassword.value);
    console.log('objetoCorreo', objetoCorreo.value);
  }

  validarFormulario(formulario:NgForm){
    console.log('Formulario', formulario);
    if(formulario.valid){
      const usuarioACrearse = {
        nombre:formulario.controls.correo.value,
        password:formulario.controls.password.value
      }
      const observableCrearUsuario$ = this._usuarioService
      .crearUsuario(usuarioACrearse);

      const observableGoogle$ = this._usuarioService
      .consultarGoogle();

      observableCrearUsuario$
      .subscribe(
        (respuestaOk)=>{
          console.log('respuestaOk',respuestaOk);
        },
        (error)=>{
          console.log('error',error);
        },
        ()=>{
          // se termina el stream
          console.log('Terminamos el proceso');
        }
      )
    }
  }
}
