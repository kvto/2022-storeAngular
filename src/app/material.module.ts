import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from "@angular/material/card"
import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon"
import { MatOptionModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
exports: [MatToolbarModule, MatCardModule, MatButtonModule,MatIconModule, MatOptionModule, MatFormFieldModule,
MatInputModule, MatSelectModule]
})

export class MaterialModule{ }