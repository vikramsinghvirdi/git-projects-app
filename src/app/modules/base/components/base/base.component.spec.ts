import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseComponent } from './base.component';
import { ClrMainContainerModule, ClrNavigationModule, ClrIconModule, ClrDropdownModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { HeaderBarComponent } from '../../../header/components/header-bar/header-bar.component';
import { UserService } from '../../../user/services/user.service';

describe('BaseComponent', () => {
  let component: BaseComponent;
  let fixture: ComponentFixture<BaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseComponent, HeaderBarComponent ],
      imports: [RouterModule, ClrMainContainerModule, ClrIconModule, ClrNavigationModule, ClrDropdownModule],
      providers: [UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
