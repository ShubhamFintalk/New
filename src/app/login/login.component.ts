import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm : FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userEmail: ['', Validators.required],
          userPassword: ['', Validators.required]
        });
    }


    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onLoginSubmit() {
        this.submitted = true;


        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
}
}



