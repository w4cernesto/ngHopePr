import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionScreenComponent } from './conversion-screen.component';

describe('ConversionScreenComponent', () => {
  let component: ConversionScreenComponent;
  let fixture: ComponentFixture<ConversionScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
