import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConferenceComponent } from './conference/conference/conference.component';
import { PresentateurComponent } from './presentateur/presentateur/presentateur.component';
import { SessionComponent } from './session/session/session.component';

const routes: Routes = [

  { path: 'conference', component: ConferenceComponent },
  { path: 'presentateur', component: PresentateurComponent },
  { path: 'session', component: SessionComponent },
  { path: '**', component: ConferenceComponent }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
