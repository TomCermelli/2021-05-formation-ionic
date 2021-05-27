import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenceComponent } from './conference/conference.component';



@NgModule({
  declarations: [
    ConferenceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConferenceComponent
  ]
})
export class ConferenceModule { }
