import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Session } from 'src/app/model/session';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent implements OnInit {

  sessions: any[] = [];
  sessionsCache: any[] = [];

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.populateSession();
    console.log(this.sessions);
  }

  populateSession() {
    this.sessionService.getAll().subscribe((res: any) => {
      for (const key in res) {
        this.sessions.push(res[key]);
      }
      let val = JSON.stringify(this.sessions);
      window.localStorage.setItem("sessionCache", val);
    })
  }

}
