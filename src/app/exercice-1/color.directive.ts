import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  @HostBinding('style.color') color : string;
  @HostListener('document:keydown', ['$event']) handleKeyboardEvent(event: KeyboardEvent) {
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
      let color = Math.floor(0x1000000 * Math.random()).toString(16);
      this.color = `#${color}`;
    }
  }

  constructor() {}
}
