import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { PageoneComponent } from './pageone.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: PageoneComponent}
];

@NgModule({
  imports: [
    //CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PageoneRoutingModule { }
