import { Directive, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

declare var Sortable;

@Directive({
  selector: '[appSortable]'
})
export class SortableDirective implements OnInit{
  @Output('beforeReorder') beforeReorder = new EventEmitter();
  reorder;
  order = [];
  constructor(private el: ElementRef) {
  }

  @HostListener('mousedown') mousedown(e) {
    //this.beforeReorder.emit({reorder: true});
  }

  @HostListener('mouseup') mouseup(e) {

  }

  ngOnInit() {
    // setTimeout( () => {
    //   console.log('xssx')
    //
    // } ,1000);
    Sortable.create(
        this.el.nativeElement, {
        animation: 150,
        scroll: true,
        //scrollSpeed: 100,
        handle: '.instant',
        onEnd: () => {
          this.order = [];
          Object.keys(this.el.nativeElement.rows).forEach((i,row) => {
            this.order.push(this.el.nativeElement.rows[i].id);
          });
          console.log(this.order);
          //this.beforeReorder.emit({reorder: false});
        },
        onStart: (evt) => {
          //this.beforeReorder.emit({reorder: true});
        },
      }
    );

    //this.reorder = new Slip(this.el.nativeElement);
    //this.reorder.detach()
    // this.el.nativeElement.addEventListener('slip:beforereorder', (e) => {
    //   if (/demo-no-reorder/.test(e.target.className)) {
    //     e.preventDefault();
    //   }
    // }, false);
    //
    // this.el.nativeElement.addEventListener('slip:beforeswipe', function(e){
    //   if (e.target.nodeName == 'INPUT' || /demo-no-swipe/.test(e.target.className)) {
    //     e.preventDefault();
    //   }
    // }, false);
    //
    // this.el.nativeElement.addEventListener('slip:beforewait', function(e){
    //   //reorder.detach();
    //   if (e.target.className.indexOf('instant') > -1) e.preventDefault();
    // }, false);
    //
    // this.el.nativeElement.addEventListener('slip:afterswipe', function(e){
    //   e.target.parentNode.appendChild(e.target);
    // }, false);
    //
    // this.el.nativeElement.addEventListener('slip:reorder', (e) => {
    //   //this.beforeReorder.emit({reorder: false});
    //   e.target.parentNode.insertBefore(e.target, e.detail.insertBefore);
    //   return false;
    // }, false);
    //
    // new Slip(this.el.nativeElement);
  }
}
