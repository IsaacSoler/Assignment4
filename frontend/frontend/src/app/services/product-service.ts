import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private backend = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    // server.js returns the array directly, not { products: [...] }
    return this.http.get(`${this.backend}/products`);
  }

  selectProduct(product: any): Observable<any> {
    return this.http.post(`${this.backend}/select-product`, product);
  }

  getSelectedProduct(): Observable<any> {
    return this.http.get(`${this.backend}/selected-product`);
  }

  submitOrder(data: any): Observable<any> {
    return this.http.post(`${this.backend}/submit-order`, data);
  }
}
