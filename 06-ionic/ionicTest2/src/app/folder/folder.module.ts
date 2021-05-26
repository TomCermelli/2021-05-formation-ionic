import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { SessionComponent } from './session/session.component';
import { ConferenceComponent } from './conference/conference.component';
import { PresentateurComponent } from './presentateur/presentateur.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SessionDetailComponent } from './session-detail/session-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    FolderPageRoutingModule
  ],
  declarations: [
    FolderPage,
    ConferenceComponent,
    PresentateurComponent,
    SessionComponent,
    SessionDetailComponent
  ],
  exports: [
    FolderPage,
    ConferenceComponent,
    PresentateurComponent,
    HttpClientModule,
    SessionComponent,
    SessionDetailComponent
  ]
})
export class FolderPageModule {}
