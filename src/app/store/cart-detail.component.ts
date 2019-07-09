import { ConnectionService } from './../model/connection.service';
import { Cart } from './../model/cart.model';
import { Component } from '@angular/core';

@Component({
    templateUrl: `cart-detail.component.html`
})
export class CartDetailComponent {
    connected = true;

    constructor(public cart: Cart, connection: ConnectionService) {
        this.connected = connection.connected;
        connection.Changes.subscribe(state => this.connected = state);
    }
}
