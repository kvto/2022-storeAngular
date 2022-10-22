import { Component, OnInit } from '@angular/core';
import { DataService } from './../../shared/services/data.service';
import { tap } from 'rxjs';
import { Store } from './../../shared/interfaces/store.interface';

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
stores: Store[]= [] 

constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
  this.getStore();
  }

  onPickupOnDelivery(value: boolean): void {
this.isDelivery = value } 

  private getStore(): void{
    this.dataSvc.getStores().pipe(
      tap((stores:Store[])=> this.stores = stores)
    ).subscribe();
  }

 private onSubmit():void{

 }
}
