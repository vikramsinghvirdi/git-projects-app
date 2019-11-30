import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './components/base/base.component';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    ClarityModule
  ],
  exports: [
    BaseComponent
  ]
})
export class BaseModule { }
