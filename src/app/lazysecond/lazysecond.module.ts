import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazySecondComponent } from './lazysecond/lazysecond.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LazySecondComponent,
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [LazySecondComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazySecondModule { }
