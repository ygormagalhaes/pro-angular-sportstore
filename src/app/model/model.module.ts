import { Cart } from './cart.model';
import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';

@NgModule({
    providers: [ProductRepository, StaticDataSource, Cart]
})
export class ModelModule { }
