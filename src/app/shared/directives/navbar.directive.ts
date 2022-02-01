import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavbar]',
})
export class NavbarDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hightlight(1);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hightlight(0);
  }

  private hightlight(color: number) {
    const sibling = this.renderer.nextSibling(this.elementRef.nativeElement);

    this.renderer.setStyle(sibling, 'opacity', color);
  }
}
