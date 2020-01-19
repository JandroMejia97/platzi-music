import { Directive, HostBinding, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[passwordInput]'
})
export class PasswordInputDirective {
  @HostBinding() type: string;

  constructor(private elementRef: ElementRef) {
    this.type = 'password';
  }

  changeType(type: string) {
    this.type = type;
    this.elementRef.nativeElement.children[0].type = this.type;
  }

}
