import { CheckoutComponent } from './store/checkout.component';
import { CartDetailComponent } from './store/cart-detail.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from './store/store.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { StoreFirstGuard } from './store-first.guard';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      { path: 'store', component: StoreComponent, canActivate: [StoreFirstGuard] },
      { path: 'cart', component: CartDetailComponent, canActivate: [StoreFirstGuard] },
      { path: 'checkout', component: CheckoutComponent, canActivate: [StoreFirstGuard] },
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
      { path: '**', redirectTo: '/store' }
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
