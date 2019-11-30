import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { RepoLandscapeCardComponent } from './components/repo-landscape-card/repo-landscape-card.component';
import { TruncatePipe } from '../../pipes/truncate/truncate.pipe';
import { ClarityModule, ClrIconModule } from '@clr/angular';
@NgModule({
  declarations: [RepoCardComponent, RepoLandscapeCardComponent, TruncatePipe],
  imports: [
    CommonModule,
    ClarityModule,
    ClrIconModule    
  ],
  exports: [
    RepoCardComponent,
    RepoLandscapeCardComponent
  ],
  providers: [
    
  ]
})
export class CardsModule { }
