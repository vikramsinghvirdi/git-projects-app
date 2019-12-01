import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Routes, RouterModule } from '@angular/router';

import { CardsModule } from '../cards/cards.module'

import { ListComponent } from './components/list/list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FilterComponent } from './components/filter/filter.component';
import { SearchService } from './services/search.service';
import { ShortNumberPipe } from '../../pipes/shortnumber/shortnumber.pipe';
const routes: Routes = [{
  path: '',
  component: ListComponent,
  pathMatch: 'full'
}];

@NgModule({
  declarations: [
    ListComponent,
    SearchBarComponent,
    FilterComponent,
    ShortNumberPipe
  ],
  imports: [
    CommonModule,
    ClarityModule,
    CardsModule,
     InfiniteScrollModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [SearchService]
})
export class SearchModule { }
