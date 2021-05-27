import { Component, OnInit } from '@angular/core';
import { Device } from "@capacitor/device";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.scss'],
})
export class TelephoneComponent implements OnInit {

  device: any;

  constructor(private toastController : ToastController) { }

  ngOnInit() {
    this.notificationToast();
    this.logDeviceInfo();
  }

  async logDeviceInfo() {
    this.device = await Device.getInfo();
  }

  async notificationToast() {
    const toast = await this.toastController.create({
      message: "Attention, il s'agit de vos coordonées personnelles veillez à ne pas les montrer à n'importe qui.",
      duration: 4000
    });
    toast.present();
  }

}
