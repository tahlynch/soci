import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[sociFilterSticky]'
})

export class FilterStickyDirective {
  private headerHeight = 0;
  private headerElement: HTMLElement;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.headerElement = document.getElementById('header');
    this.headerHeight = this.headerElement.offsetHeight;
  }

  @HostListener('window:scroll', [])
  private onWindowScroll() {
    const filterWrapperElement = this.el.nativeElement.querySelector('.filter__wrapper');
    const filterWrapperSpacerElement = this.el.nativeElement.querySelector('.filter__wrapper__spacer');
    if (this.el.nativeElement.getBoundingClientRect().top <= this.headerHeight) {
      this.renderer.addClass(filterWrapperElement, 'filter--stuck');
      filterWrapperElement.style.top = this.headerHeight + 'px';
      filterWrapperElement.style.boxShadow = '0 5px 6px -3px rgba(0,0,0,0.2)';
      this.headerElement.style.boxShadow = 'none';
      filterWrapperSpacerElement.style.top = this.headerHeight + 'px';
      filterWrapperSpacerElement.style.height = filterWrapperElement.offsetHeight + 'px';
    } else {
      this.renderer.removeClass(filterWrapperElement, 'filter--stuck');
      filterWrapperElement.style.boxShadow = 'none';
      filterWrapperSpacerElement.style.height = '0';
    }
  }
}
