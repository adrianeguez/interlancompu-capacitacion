import {Routes, RouterModule} from '@angular/router'
import { LoginComponent } from './login/login.component';
import { GeolocalizacionComponent } from './geolocalizacion/geolocalizacion.component';
import { ModuleWithProviders } from '@angular/core';

export const rutasDeLaAplicacion: Routes = [
    {
        path: '', 
        redirectTo: 'login', 
        pathMatch: 'full'
    },
    {
        path: 'login', 
        component: LoginComponent
    },
    {
        path: 'geolocalizacion', 
        component: GeolocalizacionComponent
    },
]

export const RutasModule: ModuleWithProviders = 
RouterModule.forRoot(
    rutasDeLaAplicacion, 
    {
        useHash: true
    });

    