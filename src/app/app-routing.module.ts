import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './modules/base/components/base/base.component';

const routes: Routes = [{
  path: '**',
  redirectTo: '/home'
}, {
  path: '',
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
