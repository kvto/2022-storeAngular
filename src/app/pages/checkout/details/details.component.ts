import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../../../shared/services/shopping-cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  total$ = this.shoppingCartSv.totalAction$;
  cart$ = this.shoppingCartSv.cartAction$;
  constructor(private shoppingCartSv : ShoppingCartService) { }

  ngOnInit(): void {
  }

}
