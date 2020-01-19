import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordInputDirective } from './directives/password-input/password-input.directive';



@NgModule({
  declarations: [PasswordInputDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
