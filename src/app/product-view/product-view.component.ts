import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  product: Product;
  products: Array<Product> = [];

  constructor(public productService: ProductService){}

  ngOnInit(){
    this.productService.getAllProducts().subscribe(data=>{
      this.products = data;
    });
  }
}
