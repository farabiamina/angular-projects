import {Directive, HostListener} from '@angular/core';
import {Input} from "@angular/core";
import {ElementRef} from "@angular/core";

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = "";

  constructor(private element: ElementRef) { }

  @HostListener("mouseenter") onMouseEnter() {
    this.element.nativeElement.style.background=this.appHighlight;
  };

  @HostListener("mouseleave") onMouseLeave() {
    this.element.nativeElement.style.background="";
  };

}
