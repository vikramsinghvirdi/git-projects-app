import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [UserService],
    imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])]
  }));

  it('testing User Service', inject(
    [HttpTestingController, UserService],
    (httpMock: HttpTestingController) => {

    }))

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
