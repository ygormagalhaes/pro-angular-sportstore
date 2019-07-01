import { CartSummaryComponent } from './cart-summary.component';
import { CounterDirective } from './counter.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModelModule } from './../model/model.module';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from './store.component';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent],
    exports: [StoreComponent]
})
export class StoreModule { }
