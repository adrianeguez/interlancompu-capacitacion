import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GeolocalizacionComponent } from './geolocalizacion/geolocalizacion.component';
import { RutasModule } from './app.routes';

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
    RutasModule
  ],
  providers: [ // servicios

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
