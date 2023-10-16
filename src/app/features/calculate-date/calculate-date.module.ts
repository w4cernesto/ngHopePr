import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculateDateScreenComponent } from './pages/calculate-date-screen/calculate-date-screen.component';
import { CalculateDateRoutingModule } from './calculate-date-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { Form } from 'src/app/core/routes/form.routes';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CalculateDateScreenComponent
  ],
  imports: [
    CommonModule,
    CalculateDateRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class CalculateDateModule { }
