import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionService } from './session.service';



@NgModule({
  declarations: [
    SessionService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SessionService
  ]
})
export class ServicesModule { }
