import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL = 'https://api.worldbank.org/v2/country/';
  constructor(private http: HttpClient){}


  getCountryData (countryCode: string): Observable<any> {
    const url = `${this.baseURL}${countryCode}?format=json`;
    return this.http.get(url);
  }
}