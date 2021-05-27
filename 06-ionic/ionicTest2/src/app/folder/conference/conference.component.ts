import { Component, OnInit } from '@angular/core';
import { ConferenceService } from 'src/app/services/conference.service';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss'],
})
export class ConferenceComponent implements OnInit {

  debut : any;
  fin : any;

  constructor(private conferenceService : ConferenceService) { }

  ngOnInit() {
    this.searchDate();
  }

  searchDate(){
    this.conferenceService.getAll().subscribe((res : any) => {
      this.debut = res[0];
      this.fin = res[1];
      console.log(res);
    })
  }

}
