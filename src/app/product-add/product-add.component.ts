import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService: ProductService,
    private routeService: RouteService) { }

  ngOnInit(): void {
  }

  addProduct(){
    this.productService.addProduct(this.product).subscribe(
      data=>{
        this.product = new Product();
        this.routeService.toHome();
      },
      error=>{}
    )
  }

  cancelAdd(){
    this.routeService.toHome();
  }

}
