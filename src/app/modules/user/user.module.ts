import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserService } from './services/user.service';

const routes: Routes = [{
  path: '',
  component: LoginFormComponent,
  pathMatch: 'full'
}];

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LoginFormComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
