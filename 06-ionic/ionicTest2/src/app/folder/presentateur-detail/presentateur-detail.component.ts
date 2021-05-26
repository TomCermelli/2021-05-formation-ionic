import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Presentateur } from 'src/app/model/presentateur';
import { PresentateurService } from 'src/app/services/presentateur.service';

@Component({
  selector: 'app-presentateur-detail',
  templateUrl: './presentateur-detail.component.html',
  styleUrls: ['./presentateur-detail.component.scss'],
})
export class PresentateurDetailComponent implements OnInit {

  presentateur : any;

  constructor(private presentateurService : PresentateurService ,private activateRoute: ActivatedRoute) { }

  ngOnInit() {}

  // On récupère l'id envoyé dans l'url pour trouvé le présentateur en cours
  getPresentateurById(){
    this.activateRoute.params.subscribe(res => {
      this.presentateurService.getById(res.id).subscribe(params => {
        this.populatePresentateur(params.id);
      })
    });
  }

  // Remplit une Session grâce à un id
  populatePresentateur(id : number) {
    this.presentateurService.getById(id).subscribe((res: any) => {
      this.presentateur = res.body;
      console.log(this.presentateur);
      
    })
  }

}
