import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Session } from 'src/app/model/session';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.scss'],
})
export class SessionDetailComponent implements OnInit {

  session : any;

  constructor(private sessionService : SessionService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getSessionById();
    
  }

  // On récupère l'id envoyé dans l'url pour trouvé la session en cours
  getSessionById(){
    this.activateRoute.params.subscribe(res => {
      this.sessionService.getById(res.id).subscribe(params => {
        this.populateSession(params.id);
      })
    });
  }

  // Remplit une Session grâce à un id
  populateSession(id : number) {
    this.sessionService.getById(id).subscribe((res: any) => {
      this.session = res.body;
      console.log(this.session);
      
    })
  }

}
