import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpNameComponent } from './pop-up-name.component';

describe('PopUpNameComponent', () => {
  let component: PopUpNameComponent;
  let fixture: ComponentFixture<PopUpNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
