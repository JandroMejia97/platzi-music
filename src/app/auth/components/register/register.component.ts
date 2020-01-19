import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from 'src/app/core/services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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
    ],
    firstName: [
      {
        type: 'required', message: 'First name is required.'
      },
      {
        type: 'minlength', message: 'First name must have at least 5 characters.'
      },
      {
        type: 'maxlength', message: 'The name must be less than 30 characters.'
      }
    ],
    lastName: [
      {
        type: 'required', message: 'Last name is required.'
      },
      {
        type: 'minlength', message: 'Last name must have at least 5 characters.'
      },
      {
        type: 'maxlength', message: 'The last name must be less than 30 characters.'
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
      firstName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ])),
      lastName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ])),
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

  register() {
    this.authService.signIn(this.formGroup.value);
  }

  hiddenToggle() {
    this.isShowedPassword = !this.isShowedPassword;
  }
}
