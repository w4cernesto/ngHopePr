import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

// 1.Establecer un arreglo (const) de rutas (Routes) que contenga la ruta vacía ('') y el componente que se cargará cuando se acceda a la ruta.

const routes: Routes = [
  
  // la ruta vacía ('') se configura para cargar el LoginComponent cuando se accede al módulo de autenticación.
  { path: '', component: LoginComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exportar el RouterModule para que pueda ser utilizado por el módulo padre.
  exports: [RouterModule]
})
export class AuthRoutingModule { }
// importar el AuthRoutingModule en su módulo padre.
