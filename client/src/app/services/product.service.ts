import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:4000/api/products/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.url);
  }
}
