import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCover]'
})
export class CoverDirective {

  constructor(private el: ElementRef) { }

  coverOn(): void {
    this.el.nativeElement.style.backgroundColor = 'black';
    this.el.nativeElement.style.zIndex = '2';
  }

  coverOff(): void {
    this.el.nativeElement.style.backgroundColor = 'transparent';
    this.el.nativeElement.style.zIndex = '-2';
  }
}
