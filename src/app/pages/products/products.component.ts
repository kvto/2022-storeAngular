import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ProductService } from './services/product.service';
import { Product } from './product/interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products!: Product[];
  constructor(private productSvc: ProductService) { }

  ngOnInit(): void {
    this.productSvc.getProducts()
    .pipe(
      tap((products: Product[])=> this.products = products)
    )
    .subscribe();
  }

}
