import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConversionScreenComponent } from './pages/conversion-screen/conversion-screen.component';

const routes: Routes = [
  { path: '', component: ConversionScreenComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConversionRoutingModule { }
