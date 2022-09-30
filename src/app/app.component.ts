import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sJunior el mas bello';

  getName(): void{
    console.log("holaaaaa")
  }
}
