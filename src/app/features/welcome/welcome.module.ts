import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeScreenComponent } from './pages/welcome-screen/welcome-screen.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { PopUpNameComponent } from './components/pop-up-name/pop-up-name.component';
import { Form } from 'src/app/core/routes/form.routes';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    WelcomeScreenComponent,
    PopUpNameComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    FormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class WelcomeModule { }
