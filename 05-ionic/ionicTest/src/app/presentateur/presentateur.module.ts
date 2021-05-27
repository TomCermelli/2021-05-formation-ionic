import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentateurComponent } from './presentateur/presentateur.component';



@NgModule({
  declarations: [
    PresentateurComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PresentateurComponent
  ]
})
export class PresentateurModule { }
