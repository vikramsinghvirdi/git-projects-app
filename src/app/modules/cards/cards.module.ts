import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { RepoLandscapeCardComponent } from './components/repo-landscape-card/repo-landscape-card.component';



@NgModule({
  declarations: [RepoCardComponent, RepoLandscapeCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RepoCardComponent,
    RepoLandscapeCardComponent
  ]
})
export class CardsModule { }
