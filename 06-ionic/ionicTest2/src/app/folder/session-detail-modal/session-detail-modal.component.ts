import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-session-detail-modal',
  templateUrl: './session-detail-modal.component.html',
  styleUrls: ['./session-detail-modal.component.scss'],
})
export class SessionDetailModalComponent implements OnInit {
  @Input() session : any

  constructor(private modalController : ModalController) { }

  ngOnInit() {}

  async close(){
    await this.modalController.dismiss();
  }

}
