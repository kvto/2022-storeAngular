import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './../product/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiURL = 'http://localhost:3000/products/';
  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]> {
  return this.http.get<Product[]>(this.apiURL);
}
}
