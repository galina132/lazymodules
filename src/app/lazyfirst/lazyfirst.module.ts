import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LazyFirstComponent } from './lazyfirst/lazyfirst.component';


const routes: Routes = [
  {
    path: '',
    component: LazyFirstComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [LazyFirstComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyFirstModule { }
