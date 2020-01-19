import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../core/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formGroup: FormGroup;
  validationMessages = {
    email: [
      {
        type: 'required', message: 'Email is required.'
      },
      {
        type: 'email', message: 'This email is invalid.'
      }
    ],
    password: [
      {
        type: 'required', message: 'Password is required.'
      },
      {
        type: 'minlength', message: 'The password must have at least 8 characters.'
      }
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService
  ) { }

  ngOnInit() {
    this.generateForm();
  }

  generateForm() {
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    });
  }

  signIn() {
    this.authService.logIn(this.formGroup.value);
  }

}
