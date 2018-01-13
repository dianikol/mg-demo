import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import * as Dropzone from 'dropzone';

@Directive({
  selector: '[appDropzone]'
})
export class DropzoneDirective implements OnInit{
  @Input('token') token: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    console.log(this.token);
    var myDropzone = new Dropzone(this.el.nativeElement, {
      url: "/api/files/",
      paramName: "files[]",
      headers: {
        'x-xsrf-token': this.token,
      },
      //createImageThumbnails: false,
      //previewsContainer: false,
      addedfile: function(file) {
        console.log(file);
      },
    });
  }
}
