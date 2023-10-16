import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversionScreenComponent } from './pages/conversion-screen/conversion-screen.component';
import { ConversionRoutingModule } from './conversion-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';



@NgModule({
  declarations: [
    ConversionScreenComponent
  ],
  imports: [
    CommonModule,
    ConversionRoutingModule,

    MaterialModule
  ]
})
export class ConversionModule { }
