import { Component } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product Catalog';

  product: Product;
  products: Array<Product> = [];

  constructor(public productService: ProductService){}

  ngOnInit(){
    this.productService.getAllProducts().subscribe(data=>{
      this.products = data;
    });
  }
}
