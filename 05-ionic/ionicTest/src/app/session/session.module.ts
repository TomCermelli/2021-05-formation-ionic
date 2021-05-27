import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionComponent } from './session/session.component';



@NgModule({
  declarations: [
    SessionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SessionComponent
  ]
})
export class SessionModule { }
