import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PresentateurDetailComponent } from './folder/presentateur-detail/presentateur-detail.component';
import { PresentateurComponent } from './folder/presentateur/presentateur.component';
import { SessionDetailComponent } from './folder/session-detail/session-detail.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'folder/Conférence', pathMatch: 'full'
  },
  {
    path: 'folder/:id', loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'folder/Présentateur/:id', component: PresentateurDetailComponent,
  },
  {
    path: 'folder/Session/:id', component: SessionDetailComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
