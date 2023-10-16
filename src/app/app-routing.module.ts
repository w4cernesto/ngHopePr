import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // la ruta vacía ('') se redirige al módulo de auth, lo que significa que cuando la aplicación se inicie cargará el login.
  { path: '', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule ) },

  // features va a cargar todas las secciones / páginas como bienvenida, calcular fecha, formulario y conversion
  { path: 'features', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule )},

  { path: '**', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule ) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
