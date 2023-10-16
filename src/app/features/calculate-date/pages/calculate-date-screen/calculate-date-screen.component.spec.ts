import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateDateScreenComponent } from './calculate-date-screen.component';

describe('CalculateDateScreenComponent', () => {
  let component: CalculateDateScreenComponent;
  let fixture: ComponentFixture<CalculateDateScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateDateScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateDateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
