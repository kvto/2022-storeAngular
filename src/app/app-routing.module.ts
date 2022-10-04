import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KevincodeComponent } from './pages/kevincode/kevincode.component';

const routes: Routes = [
    { path: 'kevincode', component: KevincodeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{ }