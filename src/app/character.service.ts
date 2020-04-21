import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CharacterService {
  private httpOptions: { headers?: HttpHeaders, params?: HttpParams, } = {}

  constructor(private http: HttpClient) { 
    this.httpOptions.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public getCharacters(): Observable<any> {
    const requestOptions = this.httpOptions;
    return this.http.get<any>('https://rickandmortyapi.com/api/character/');
  }

}