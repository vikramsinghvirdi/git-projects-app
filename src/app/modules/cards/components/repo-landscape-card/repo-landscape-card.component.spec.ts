import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoLandscapeCardComponent } from './repo-landscape-card.component';
import { DateAgoPipe } from '../../../../pipes/dateAgo/dateago.pipe';
import { ClrIconModule } from '@clr/angular';

describe('RepoLandscapeCardComponent', () => {
  let component: RepoLandscapeCardComponent;
  let fixture: ComponentFixture<RepoLandscapeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoLandscapeCardComponent, DateAgoPipe ],
      imports: [ClrIconModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoLandscapeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
