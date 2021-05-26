import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Session } from '../model/session';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://devfest-nantes-2018-api.cleverapps.io/sessions/'
  }

  getAll() {
    return this.http.get<Session[]>(this.baseUrl);
  }

  getById(id: number, sessions: any) {
    sessions = JSON.parse(localStorage.getItem("sessionCache"));
    const session = sessions.find(session => session.id == id);
    return session;
  }

}
