import { AuthGuard } from './auth.guard';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routing = RouterModule.forChild([
    { path: 'auth', component: AuthComponent },
    { path: 'main', component: AdminComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'auth' }
]);

@NgModule({
    imports: [FormsModule, CommonModule, routing],
    declarations: [AuthComponent, AdminComponent],
    providers: [AuthGuard]
})
export class AdminModule { }
