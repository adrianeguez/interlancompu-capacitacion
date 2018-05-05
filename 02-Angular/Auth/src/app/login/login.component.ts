import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password = '';
  tipoInput = 'password';
  valorCorreo = 'me@yo.com';
  claseBoton = 'btn btn-success';
  colorTextoBoton = '#000';

  constructor() { }

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
}
