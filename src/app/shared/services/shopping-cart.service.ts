
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Product } from "src/app/pages/products/product/interfaces/product.interface";

@Injectable(
{providedIn: 'root'}
)

export class ShoppingCartService {
    products: Product[] = []

    private cartSubject = new Subject<Product[]>();
    private totalSubject = new Subject<number>();
    private quantitySubject = new Subject<number>();

get totalAction$(): Observable<number>{
    return this.totalSubject.asObservable();
}

get quantitylAction$(): Observable<number>{
    return this.quantitySubject.asObservable();
}


get cartAction$(): Observable<Product[]>{
    return this.cartSubject.asObservable();
}

private calcTotal(): void{
    const total = this.products.reduce((acc,prod) => acc+=prod.price, )
}

}