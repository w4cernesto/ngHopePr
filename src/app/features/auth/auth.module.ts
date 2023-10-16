import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    // importar el auth-routing.module para que las rutas del módulo de autenticación estén disponibles en la aplicación.
    AuthRoutingModule,
    // importar el modulo de material para que los componentes de material estén disponibles en la aplicación.
    MaterialModule,
    // formularios reactivos
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class AuthModule { }
