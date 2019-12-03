import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ClrIconModule, ClrRadioModule  } from '@clr/angular';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { FilterComponent } from '../../components/filter/filter.component';
import { ShortNumberPipe } from '../../../../pipes/shortnumber/shortnumber.pipe';
import { RepoCardComponent } from '../../../cards/components/repo-card/repo-card.component';
import { RepoCardSkeletonComponent } from '../../../cards/components/repo-card/repo-card-skeleton/repo-card-skeleton.component';
import { RepoLandscapeCardComponent } from '../../../cards/components/repo-landscape-card/repo-landscape-card.component';
import { RepoLandscapeCardSkeletonComponent } from '../../../cards/components/repo-landscape-card/repo-landscape-card-skeleton/repo-landscape-card-skeleton.component';
import { DateAgoPipe } from '../../../../pipes/dateAgo/dateago.pipe';
import { NgxContentLoadingModule } from 'ngx-content-loading';
import { SearchService } from '../../services/search.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent, DateAgoPipe, SearchBarComponent, FilterComponent, ShortNumberPipe, RepoCardComponent, RepoCardSkeletonComponent, RepoLandscapeCardComponent, RepoLandscapeCardSkeletonComponent],
      imports: [InfiniteScrollModule, ClrIconModule, ClrRadioModule, NgxContentLoadingModule, HttpClientTestingModule, HttpTestingController],
      providers: [SearchService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
