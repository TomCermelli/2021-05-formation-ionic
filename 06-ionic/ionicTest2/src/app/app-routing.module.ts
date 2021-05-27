import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConferenceComponent } from './folder/conference/conference.component';
import { PresentateurDetailComponent } from './folder/presentateur-detail/presentateur-detail.component';
import { PresentateurComponent } from './folder/presentateur/presentateur.component';
import { SessionDetailComponent } from './folder/session-detail/session-detail.component';
import { SessionComponent } from './folder/session/session.component';
import { TelephoneComponent } from './folder/telephone/telephone.component';

const routes: Routes = [
  {
    path: '', component: ConferenceComponent, pathMatch: 'full'
  },
  {
    path: 'presentateurs', component: PresentateurComponent,
  },
  {
    path: 'presentateurs/:id', component: PresentateurDetailComponent,
  },
  {
    path: 'sessions', component: SessionComponent,
  },
  {
    path: 'sessions/:id', component: SessionDetailComponent,
  },
  {
    path: 'telephone', component: TelephoneComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
