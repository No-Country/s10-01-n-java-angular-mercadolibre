import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginBisComponent } from './auth-login-bis.component';

describe('AuthLoginBisComponent', () => {
  let component: AuthLoginBisComponent;
  let fixture: ComponentFixture<AuthLoginBisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthLoginBisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLoginBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
