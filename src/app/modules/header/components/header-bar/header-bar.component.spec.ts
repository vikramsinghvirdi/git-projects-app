import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBarComponent } from './header-bar.component';
import { RouterModule } from '@angular/router';
import { ClrDropdownModule, ClrIconModule, ClrNavigationModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../../user/services/user.service';

describe('HeaderBarComponent', () => {
  let component: HeaderBarComponent;
  let fixture: ComponentFixture<HeaderBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBarComponent ],
      imports: [RouterModule, ClrDropdownModule, ClrIconModule, ClrNavigationModule, HttpClientModule],
      providers: [UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
