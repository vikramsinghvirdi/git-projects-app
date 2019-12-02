import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './modules/base/components/base/base.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [{
  path: 'login',
  children: [{
    path: '',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  }, {
    path: 'callback',
    data: { actionType: 'callback' },
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  }]
}, {
  path: '',
  canActivate: [AuthGuard],
  component: BaseComponent,
  children: [{
    path: 'home',
    loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
