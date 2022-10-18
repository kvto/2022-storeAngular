import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ProductService } from './services/product.service';
import { Product } from './product/interfaces/product.interface';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products!: Product[];
  constructor(private productSvc: ProductService, private shoppingCartSvc: ShoppingCartService) { }

  ngOnInit(): void {
    this.productSvc.getProducts()
    .pipe(
      tap((products: Product[])=> this.products = products)
    )
    .subscribe();
  }


  addToCart(product: Product): void{
this.shoppingCartSvc.updateCart(product);
  }
}
