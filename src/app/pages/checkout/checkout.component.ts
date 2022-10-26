import { Component, OnInit } from '@angular/core';
import { DataService } from './../../shared/services/data.service';
import { delay, tap, switchMap } from 'rxjs';
import { Store } from './../../shared/interfaces/store.interface';
import { NgForm } from '@angular/forms';
import { Details } from 'src/app/shared/interfaces/order.interface';
import { Product } from '../products/product/interfaces/product.interface';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Router } from '@angular/router';
import { ProductsService } from '../products/services/products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
model={
name:'',
store:'',
shippingAddress: '',
city: '',
};
isDelivery= false;
cart: Product[] = []
stores: Store[]= [] 

constructor(private dataSvc: DataService, 
  private shoppingCartSvc: ShoppingCartService,
  private router: Router,
  private productsSvc: ProductsService) { }

  ngOnInit(): void {
  this.getStore();
  this.getDataCart();
  this.prepareDEtails();
  }

  onPickupOnDelivery(value: boolean): void {
this.isDelivery = value } 

  private getStore(): void{
    this.dataSvc.getStores().pipe(
      tap((stores:Store[])=> this.stores = stores)
    ).subscribe();
  }

  onSubmit({value:formData}:NgForm):void{
    console.log(formData)
    const data = {
      ...formData,
      date: this.getCurrenteDay(), 
      isDelivery: this.isDelivery,
    }
    this.dataSvc.saveOrder(data).pipe(
      tap( res => console.log(res)),
      switchMap(({id:orderId})=> {
        const details = this.prepareDEtails();
        return this.dataSvc.saveDetailsOrder({ details, orderId });
      }),
      tap( () => this.router.navigate(['/checkout/thank-you-page'])),
      delay(2000),
      tap( () => this.shoppingCartSvc.resetCar())
    ).subscribe()
 }

 private getCurrenteDay():string{
  return new Date().toLocaleDateString()
 }

 private prepareDEtails(): Details[]{
  const details: Details[] = [];
  this.cart.forEach((product:Product) => {
    const {id:productId, name:productName, qty:quantity, stock} = product;
    const updateStock = {stock - quantity);
    this.productsSvc.updateStock(productId, updateStock)
      .pipe(
    .tap(res => details.push({productId, productName, quantity})
   )
      .subscribe()
    
  })
  return details;
 }

 private getDataCart():void{
  this.shoppingCartSvc.cartAction$.pipe(
    tap((products: Product[])=>this.cart = products)
  ).subscribe()
 }
}
