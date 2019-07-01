import { AuthService } from './../model/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: 'auth.component.html'
})
export class AuthComponent {

    username: string;
    password: string;
    errorMessage: string;

    constructor(private router: Router, private authService: AuthService) { }

    authenticate(form: NgForm) {
        if (form.valid) {
            this.authService.authenticate(this.username, this.password)
                .subscribe(response => {
                    if (response) {
                        this.router.navigateByUrl('/admin/main');
                    }
                    this.errorMessage = 'Authentication failed.';
                });
        } else {
            this.errorMessage = 'Form Data Invalid';
        }
    }
}
