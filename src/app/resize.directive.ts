import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appResize]'
})
export class ResizeDirective {
  @Output('beforeReorder') beforeReorder = new EventEmitter();
  @Input('current') current: number;
  @HostListener('mousedown') mousedown(e) {
    console.log(this.current)
    //this.beforeReorder.emit({reorder: true});
  }
  constructor() { }

}
