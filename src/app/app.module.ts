import { CheckoutComponent } from './store/checkout.component';
import { CartDetailComponent } from './store/cart-detail.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from './store/store.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      { path: 'store', component: StoreComponent },
      { path: 'cart', component: CartDetailComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: '**', redirectTo: '/store' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
