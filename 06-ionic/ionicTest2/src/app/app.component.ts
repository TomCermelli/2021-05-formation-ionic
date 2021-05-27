import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Conference', url: '', icon: 'mail' },
    { title: 'Presentateur', url: 'presentateurs', icon: 'walk' },
    { title: 'Session', url: 'sessions', icon: 'heart' },
    { title: 'Info', url: 'telephone', icon: 'call' },
  ];
  
  constructor() {}
}
