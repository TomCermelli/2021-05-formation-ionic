import { Component, OnInit } from '@angular/core';
import { PresentateurService } from 'src/app/services/presentateur.service';

@Component({
  selector: 'app-presentateur',
  templateUrl: './presentateur.component.html',
  styleUrls: ['./presentateur.component.scss'],
})
export class PresentateurComponent implements OnInit {

  presentateurs : any[] = [];

  constructor(private presentateurService : PresentateurService) { }

  ngOnInit() {
    this.populatePresentateur();
    console.log(this.presentateurs);
    

  }

  populatePresentateur(){
    this.presentateurService.getAll().subscribe((res : any) => {
      this.presentateurService.getAll().subscribe(res => {
        for (const key in res) {
          this.presentateurs.push(res[key]);
        }
      })
    })
  }
}
