import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Presentateur } from '../model/presentateur';

@Injectable({
  providedIn: 'root'
})
export class PresentateurService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://devfest-nantes-2018-api.cleverapps.io/speakers'
  }

  getAll() {
    return this.http.get<Presentateur[]>(this.baseUrl);
  }

  getById(id : number){
    return this.http.get<Presentateur>(this.baseUrl + id);
  }
}
