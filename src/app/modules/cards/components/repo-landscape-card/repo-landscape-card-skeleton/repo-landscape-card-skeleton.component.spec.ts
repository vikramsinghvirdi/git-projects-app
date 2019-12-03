import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoLandscapeCardSkeletonComponent } from './repo-landscape-card-skeleton.component';
import { NgxContentLoadingModule } from 'ngx-content-loading';

describe('RepoLandscapeCardSkeletonComponent', () => {
  let component: RepoLandscapeCardSkeletonComponent;
  let fixture: ComponentFixture<RepoLandscapeCardSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RepoLandscapeCardSkeletonComponent],
      imports: [NgxContentLoadingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoLandscapeCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
