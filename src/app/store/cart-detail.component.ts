import { Cart } from './../model/cart.model';
import { Component } from '@angular/core';

@Component({
    templateUrl: `cart-detail.component.html`
})
export class CartDetailComponent {

    constructor(public cart: Cart) { }
}
