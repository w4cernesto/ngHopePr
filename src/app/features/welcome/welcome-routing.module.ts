import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeScreenComponent } from './pages/welcome-screen/welcome-screen.component';

const routes: Routes = [
  { path: '', component: WelcomeScreenComponent, pathMatch: 'full' }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exportar el RouterModule para que pueda ser utilizado por el módulo padre.
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
