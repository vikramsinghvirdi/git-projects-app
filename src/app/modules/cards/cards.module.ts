import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { NgxContentLoadingModule } from 'ngx-content-loading';
import { TruncatePipe } from '../../pipes/truncate/truncate.pipe';
import { DateAgoPipe } from '../../pipes/dateAgo/dateago.pipe';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { RepoCardSkeletonComponent } from './components/repo-card/repo-card-skeleton/repo-card-skeleton.component';
import { RepoLandscapeCardComponent } from './components/repo-landscape-card/repo-landscape-card.component';
import { RepoLandscapeCardSkeletonComponent } from './components/repo-landscape-card/repo-landscape-card-skeleton/repo-landscape-card-skeleton.component';
@NgModule({
  declarations: [
    RepoCardComponent,
    RepoLandscapeCardComponent,
    TruncatePipe,
    DateAgoPipe,
    RepoCardSkeletonComponent,
    RepoLandscapeCardSkeletonComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    ClrIconModule,
    NgxContentLoadingModule
  ],
  exports: [
    RepoCardComponent,
    RepoCardSkeletonComponent,
    RepoLandscapeCardComponent,
    RepoLandscapeCardSkeletonComponent
  ],
  providers: [

  ]
})
export class CardsModule { }
