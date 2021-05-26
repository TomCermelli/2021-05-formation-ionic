import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SessionService } from 'src/app/services/session.service';
import { SessionDetailModalComponent } from '../session-detail-modal/session-detail-modal.component';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.scss'],
})
export class SessionDetailComponent implements OnInit {

  sessions: any;
  id: number;

  constructor(private sessionService: SessionService, private activateRoute: ActivatedRoute,
    private modalController : ModalController) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(res => {
      this.id=res.id;
    })
    this.sessions = this.sessionService.getById(this.id, this.sessions)
    console.log(this.sessions);
  }

  async showModal() {
    const modal = await this.modalController.create({
      component: SessionDetailModalComponent,
      componentProps: {
        session: this.sessions
      }
    })
    await modal.present();
  }
}
