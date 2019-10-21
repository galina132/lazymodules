import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FirstComponent} from './first/first.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {
    path: 'login',
    component: FirstComponent,
    pathMatch: 'full',
    canActivateChild: [] },
  {
    path: 'lazyfirst',
    loadChildren: () => import(`src/app/lazyfirst/lazyfirst.module`).then(m => m.LazyFirstModule),
    canActivate: [AuthGuard]

  },
  {
    path: 'lazysecond', loadChildren: () => import(`./lazysecond/lazysecond.module`).then(m => m.LazySecondModule),
    canActivate: [AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
