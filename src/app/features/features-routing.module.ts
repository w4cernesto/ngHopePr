import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { ChildAuthGuard } from '../core/guards/child-auth.guard';

const routes: Routes = [

  { path: '',
    // debido a que el componente de features sera el contenedor de todas las secciones, su ruta se encuentra vacía
    component: FeaturesComponent,
    // El guard se coloca en la ruta padre
    canActivate: [AuthGuard],
    // El guard se coloca en la ruta padre, para que todas las rutas hijas esten protegidas
    canActivateChild: [ChildAuthGuard], 
    // Los componentes/secciones se cargaran en este componente, y para acceder a ellos se colocan como rutas hijas.
    children: [
      {
        path: 'welcome',
        loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule )
      },
      {
        path: 'calculate-date',
        loadChildren: () => import('./calculate-date/calculate-date.module').then(m => m.CalculateDateModule )
      },
      {
        path: 'form',
        loadChildren: () => import('./form/form.module').then(m => m.FormModule )
      },
      {
        path: 'conversion',
        loadChildren: () => import('./conversion/conversion.module').then(m => m.ConversionModule )
      },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },

    ]

  }

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
