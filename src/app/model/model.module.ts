import { Cart } from './cart.model';
import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { OrderRepository } from './order.repository';

@NgModule({
    providers: [ProductRepository, StaticDataSource, Cart, OrderRepository]
})
export class ModelModule { }
