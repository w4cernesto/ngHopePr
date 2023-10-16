import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CalculateDateScreenComponent } from './pages/calculate-date-screen/calculate-date-screen.component';

const routes: Routes = [
  { path: '', component: CalculateDateScreenComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculateDateRoutingModule { }
