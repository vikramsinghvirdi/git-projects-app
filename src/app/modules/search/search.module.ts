import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { CardsModule } from '../cards/cards.module'
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FilterComponent } from './components/filter/filter.component';
import { SearchService } from './services/search.service';
import { SummaryBarComponent } from './components/summary-bar/summary-bar.component';
const routes: Routes = [{
  path: '',
  component: ListComponent,
  pathMatch: 'full'
}];

@NgModule({
  declarations: [ListComponent, SearchBarComponent, FilterComponent, SummaryBarComponent],
  imports: [
    CommonModule,
    ClarityModule,
    ClrIconModule,
    CardsModule,
    RouterModule.forChild(routes),
  ],
  exports : [ ],
  providers: [ SearchService ]
})
export class SearchModule { }
