import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Conference', url: '/folder/Conférence', icon: 'mail' },
    { title: 'Presentateur', url: '/folder/Présentateur', icon: 'paper-plane' },
    { title: 'Session', url: '/folder/Session', icon: 'heart' },
  ];
  
  constructor() {}
}
