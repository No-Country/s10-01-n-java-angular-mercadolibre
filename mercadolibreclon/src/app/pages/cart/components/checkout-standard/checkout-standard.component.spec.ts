import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutStandardComponent } from './checkout-standard.component';

describe('CheckoutStandardComponent', () => {
  let component: CheckoutStandardComponent;
  let fixture: ComponentFixture<CheckoutStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutStandardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
