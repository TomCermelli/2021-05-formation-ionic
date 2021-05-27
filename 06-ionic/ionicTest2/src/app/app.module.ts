import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SessionComponent } from './folder/session/session.component';
import { PresentateurComponent } from './folder/presentateur/presentateur.component';
import { SessionDetailComponent } from './folder/session-detail/session-detail.component';
import { PresentateurDetailComponent } from './folder/presentateur-detail/presentateur-detail.component';
import { ConferenceComponent } from './folder/conference/conference.component';
import { SessionDetailModalComponent } from './folder/session-detail-modal/session-detail-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ConferenceComponent,
    SessionComponent,
    SessionDetailComponent,
    SessionDetailModalComponent,
    PresentateurComponent,
    PresentateurDetailComponent
  ],
  entryComponents: [

  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
