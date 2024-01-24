import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ErrorMsg } from '../models/error';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    url = 'http://localhost:4000/api/products/';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.url);
    }

    deleteProduct(id: string): Observable<ErrorMsg> {
        return this.http.delete(this.url + id);
    }

    createProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.url, product);
    }

    getProduct(id: string): Observable<Product> {
        return this.http.get<Product>(this.url + id);
    }

    editProduct(id: string, product: Product): Observable<Product> {
        return this.http.put<Product>(this.url + id, product);
    }
}
