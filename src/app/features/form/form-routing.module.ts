import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormScreenComponent } from './pages/form-screen/form-screen.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: FormScreenComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
