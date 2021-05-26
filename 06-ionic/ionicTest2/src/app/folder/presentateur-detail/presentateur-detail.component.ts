import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PresentateurService } from 'src/app/services/presentateur.service';

@Component({
  selector: 'app-presentateur-detail',
  templateUrl: './presentateur-detail.component.html',
  styleUrls: ['./presentateur-detail.component.scss'],
})
export class PresentateurDetailComponent implements OnInit {

  presentateurs : any;
  id : number;

  constructor(private presentateurService : PresentateurService ,private activateRoute: ActivatedRoute) { }


  ngOnInit() {
    this.activateRoute.params.subscribe(res => {
      this.id=res.id;
    })
    this.presentateurs = this.presentateurService.getById(this.id, this.presentateurs)
    console.log(this.presentateurs);
  }
}
