import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8000/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class CreditApprovalsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl + 'credits/');
  }
  
  getClientAnalyzers(id:number): Observable<any> {
    console.log(`${baseUrl}get_client_profile/${id}`);
    return this.http.get(`${baseUrl}get_client_profile/${id}`);
  }

  update(id:number, data:any): Observable<any> {
    return this.http.put(`${baseUrl}credit_approval/${id}`, data);
  }
}