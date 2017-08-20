import { Directive, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[message]'
})
export class MessageDirective {
  @Input() msg: string;

  @HostListener('click')
  onClick() {
    alert(this.msg || 'this is default message');
  }
}
