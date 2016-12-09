import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {User} from "./user.model";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})

export class SigninComponent{
    authForm: FormGroup;

    constructor(private authService: AuthService, private router: Router) {}

    onSubmit() {
        const user = new User(this.authForm.value.email, this.authForm.value.password);
        this.authService.signin(user)
            .subscribe(
                data => {
                    localStorage.removeItem('firstName');
                    window.localStorage.setItem('firstName', data.firstName);
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    window.location.reload(true);
                    this.router.navigateByUrl('/');
                },
                error => console.error(error)
            );
        this.authForm.reset();
    }

    ngOnInit() {
        this.authForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }

}