import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hightlight('red');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hightlight('green');
  }

  private hightlight(color: string) {
    this.elementRef.nativeElement.style.background = color;
  }
}
