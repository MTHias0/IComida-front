import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class restaurantService {

    constructor(private http: HttpClient) {}

    public createRestaurant(email: string, name: string, password: string, address: string, telNumber: string) {

        const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' });
        const requestOption = { headers: headers, responseType: "json" as 'json' };
    
        return this.http.post<JSON>('http://localhost:3000/create-restaurant', JSON.stringify({ email, name, password, address, telNumber }), requestOption)
    }

    public addFood(itemName: string, price: string, role: string ) {
      const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' });
      const requestOption = { headers: headers, responseType: "json" as 'json' };
      const userId = '';

      return this.http.post<JSON>('http://localhost:3000/add-item', JSON.stringify({ userId, itemName, price, role }), requestOption)
    }

}