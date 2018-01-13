import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageoneComponent } from './pageone.component';
import { PageoneRoutingModule } from './pageone-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PageoneRoutingModule
  ],
  declarations: [PageoneComponent]
})
export class PageoneModule { }
