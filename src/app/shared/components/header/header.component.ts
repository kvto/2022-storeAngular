import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<mat-toolbar color="primary">
  <span class="spacer">My store Kjmz</span>
  <app-cart></app-cart>
</mat-toolbar>
`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


}
