import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoCardSkeletonComponent } from './repo-card-skeleton.component';
import { NgxContentLoadingModule } from 'ngx-content-loading';

describe('RepoCardSkeletonComponent', () => {
  let component: RepoCardSkeletonComponent;
  let fixture: ComponentFixture<RepoCardSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoCardSkeletonComponent],
      imports: [NgxContentLoadingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
