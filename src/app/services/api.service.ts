import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from "../congif";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllByDetails(floor: number, bazar: string ): Observable<any> {
    return this.http.get(`${API_URL}market/boutique-address/?bazar=${bazar}&floor=${floor}`);
  }

}
