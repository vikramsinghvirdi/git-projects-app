import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { UserModule } from '../user/user.module';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';


@NgModule({
  declarations: [HeaderBarComponent],
  imports: [
    RouterModule,
    CommonModule,
    ClarityModule,
    UserModule
  ],
  exports: [
    HeaderBarComponent
  ]
})
export class HeaderModule { }
