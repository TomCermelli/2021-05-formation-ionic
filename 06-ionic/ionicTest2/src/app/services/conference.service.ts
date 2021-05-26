import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {
  baseUrl: string;

  constructor(private http : HttpClient) {
    this.baseUrl = 'https://devfest-nantes-2018-api.cleverapps.io/schedule/'
  }

  getAll() {
    return this.http.get<[]>(this.baseUrl);
  }
}
