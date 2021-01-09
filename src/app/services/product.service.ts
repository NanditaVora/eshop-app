import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api: string = 'http://localhost:3000/products';

  productSubject: BehaviorSubject<Array<Product>> = new BehaviorSubject([]);
  products: Array<Product> = [];

  constructor(private http: HttpClient) { 
    this.http.get<Array<Product>>(this.api).subscribe(
      data=>{
        this.products = data;
        this.productSubject.next(this.products);
      }
    )
    
  }

  getAllProducts(): Observable<Array<Product>>{
    return this.productSubject;
  }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.api, product)
    .pipe(tap(data=>{
      this.products.push(data);
      this.productSubject.next(this.products);
    }));
  }
}
