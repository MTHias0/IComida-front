import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  public login(email: string, password: string) {

    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' });
    const requestOption = { headers: headers, responseType: "json" as 'json' };

    return this.http.post<JSON>('http://localhost:3000/restaurant-login', JSON.stringify({ email, password }), requestOption)
    .subscribe((response: any) => {

      return response
    });
  }
}
