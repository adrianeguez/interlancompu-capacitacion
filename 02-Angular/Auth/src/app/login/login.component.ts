import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tipoInput = 'password';
  valorCorreo = 'me@yo.com';
  claseBoton = 'btn btn-success';
  colorTextoBoton = '#000';

  constructor() { }

  ngOnInit() {
  }

}
