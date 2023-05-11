import {Directive, Input} from '@angular/core';
import {HostListener} from "@angular/core";
import {ElementRef} from "@angular/core";

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = '';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
