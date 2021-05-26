import { Component, OnInit } from '@angular/core';
import { ConferenceService } from 'src/app/services/conference.service';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss'],
})
export class ConferenceComponent implements OnInit {

  conferences : [] = []

  constructor(private conferenceService : ConferenceService) { }

  ngOnInit() {
    this.searchDate();
  }

  searchDate(){
    this.conferenceService.getAll().subscribe((res : any) => {
      this.conferences = res;
      console.log(this.conferences);
      console.log(res);
    })
  }

}
