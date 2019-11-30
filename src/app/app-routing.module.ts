import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './modules/base/components/base/base.component';
import { NotFoundComponent } from './modules/not-found/components/not-found/not-found.component';

const routes: Routes = [{
  path: '404',
  component: NotFoundComponent
},{
  path: '',
  // canActivate: [EntityGuard],
  component: BaseComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
