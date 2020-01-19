import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/core/services/authenticate.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  isShowedPassword = false;
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
  ) {
    this.generateForm();
  }

  ngOnInit() {}

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

  logIn() {
    this.authService.logIn(this.formGroup.value);
  }

  hiddenToggle() {
    this.isShowedPassword = !this.isShowedPassword;
  }

}
