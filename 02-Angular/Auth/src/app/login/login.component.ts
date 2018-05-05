import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario.service';

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

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit() {
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
  }
}
