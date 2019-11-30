import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';


@NgModule({
  declarations: [HeaderBarComponent],
  imports: [
    RouterModule,
    CommonModule,
    ClarityModule
  ],
  exports: [
    HeaderBarComponent
  ]
})
export class HeaderModule { }
