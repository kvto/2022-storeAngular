import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
  <mat-toolbar color="primary">
    <a [routerLink]="['/']"> 
   <span class="spacer">My store Kjmz</span>     
    </a>
  <app-cart class="cart" (click)="goToCheckout()"></app-cart>
</mat-toolbar>
`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

constructor(private router:Router){}

goToCheckout():void{
this.router.navigate(['/checkout']);
}
}
