import { AuthService } from './auth.service';
import { Cart } from './cart.model';
import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { ConnectionService } from './connection.service';

@NgModule({
    imports: [HttpClientModule],
    providers: [
        ProductRepository,
        Cart,
        OrderRepository,
        Order,
        { provide: StaticDataSource, useClass: RestDataSource },
        RestDataSource,
        AuthService,
        ConnectionService
    ]
})
export class ModelModule { }
