import { ProductEditorComponent } from './product-editor.component';
import { ProductTableComponent } from './product-table.component';
import { AuthGuard } from './auth.guard';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTableComponent } from './order-table.component';

const routing = RouterModule.forChild([
    { path: 'auth', component: AuthComponent },
    {
        path: 'main',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'products/:mode/:id', component: ProductEditorComponent },
            { path: 'products/:mode', component: ProductEditorComponent },
            { path: 'products', component: ProductTableComponent },
            { path: 'orders', component: OrderTableComponent },
            { path: '**', redirectTo: 'products' }
        ]
    },
    { path: '**', redirectTo: 'auth' }
]);

@NgModule({
    imports: [FormsModule, CommonModule, routing],
    declarations: [AuthComponent, AdminComponent, ProductTableComponent, OrderTableComponent, ProductEditorComponent],
    providers: [AuthGuard]
})
export class AdminModule { }
