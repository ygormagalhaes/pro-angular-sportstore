import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routing = RouterModule.forChild([
    { path: 'auth', component: AuthComponent },
    { path: 'main', component: AdminComponent },
    { path: '**', redirectTo: 'auth' }
]);

@NgModule({
    imports: [FormsModule, CommonModule, routing],
    declarations: [AuthComponent, AdminComponent]
})
export class AdminModule { }
