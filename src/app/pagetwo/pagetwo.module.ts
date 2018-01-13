import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagetwoComponent } from './pagetwo.component';
import { PageTwoRoutingModule } from './pagetwo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PageTwoRoutingModule
  ],
  declarations: [PagetwoComponent]
})
export class PagetwoModule { }
