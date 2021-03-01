import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstlookComponent } from './firstlook.component';

describe('FirstlookComponent', () => {
  let component: FirstlookComponent;
  let fixture: ComponentFixture<FirstlookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstlookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstlookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
