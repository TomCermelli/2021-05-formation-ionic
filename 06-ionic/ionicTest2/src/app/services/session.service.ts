import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Session } from '../model/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  baseUrl: string;

  constructor(private http : HttpClient) {
    this.baseUrl = 'https://devfest-nantes-2018-api.cleverapps.io/sessions/'
  }

  getAll() {
    return this.http.get<Session[]>(this.baseUrl);
  }

  getById(id : number){
    return this.http.get<Session>(this.baseUrl + id);
  }

}
