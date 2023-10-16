import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeLettersPipe } from './pipes/change-letters.pipe';



@NgModule({
  declarations: [
    ChangeLettersPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChangeLettersPipe
  ]
})
export class SharedModule { }
