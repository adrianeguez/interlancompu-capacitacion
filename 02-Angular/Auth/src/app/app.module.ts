import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GeolocalizacionComponent } from './geolocalizacion/geolocalizacion.component';
import { RutasModule } from './app.routes';
import { UsuarioService } from './servicios/usuario.service';

// ng g c NombreDelComponente
// ng generate component NombreDelComponente

@NgModule({
  declarations: [ // componentes
    AppComponent, 
    LoginComponent, 
    GeolocalizacionComponent
  ],
  imports: [ // modulos
    BrowserModule,
    RutasModule,
    FormsModule,
    HttpModule
  ],
  providers: [ // servicios
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
