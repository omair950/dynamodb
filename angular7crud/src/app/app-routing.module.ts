
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
;
import { GstGetComponent } from './gst-get/gst-get.component';

const routes: Routes = [
 
  {
    path: 'business',
    component: GstGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }