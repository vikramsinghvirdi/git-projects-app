import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoLandscapeCardSkeletonComponent } from './repo-landscape-card-skeleton.component';

describe('RepoLandscapeCardSkeletonComponent', () => {
  let component: RepoLandscapeCardSkeletonComponent;
  let fixture: ComponentFixture<RepoLandscapeCardSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoLandscapeCardSkeletonComponent ]
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
