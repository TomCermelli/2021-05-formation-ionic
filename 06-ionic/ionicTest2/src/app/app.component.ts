import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Conference', url: '', icon: 'mail' },
    { title: 'Presentateur', url: 'presentateurs', icon: 'paper-plane' },
    { title: 'Session', url: 'sessions', icon: 'heart' },
  ];
  
  constructor() {}
}
