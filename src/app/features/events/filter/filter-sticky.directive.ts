import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[sociFilterSticky]'
})

export class FilterStickyDirective {
  private headerHeight = 0;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.headerHeight = document.getElementById('header').offsetHeight;
  }

  @HostListener('window:scroll', [])
  private onWindowScroll() {
    const fooElement = this.el.nativeElement.querySelector('.filter__wrapper');
    if (this.el.nativeElement.getBoundingClientRect().top <= this.headerHeight) {
      this.renderer.addClass(fooElement, 'filter--stuck');
      fooElement.style.top = this.headerHeight + 'px';
      fooElement.style.boxShadow = '0 5px 6px -3px rgba(0,0,0,0.2)';
      document.getElementById('header').style.boxShadow = 'none';
    } else {
      this.renderer.removeClass(this.el.nativeElement.querySelector('.filter__wrapper'), 'filter--stuck');
      fooElement.style.boxShadow = 'none';
    }
  }

  private offset(el: Element) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
}
