import { NgModule } from '@angular/core';

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'page-one', pathMatch: 'full'},
  {path: 'page-one', loadChildren: './pageone/pageone.module#PageoneModule'},
  {path: 'page-two', loadChildren: './pagetwo/pagetwo.module#PagetwoModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
