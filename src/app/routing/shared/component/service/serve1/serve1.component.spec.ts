import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Serve1Component } from './serve1.component';

describe('Serve1Component', () => {
  let component: Serve1Component;
  let fixture: ComponentFixture<Serve1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Serve1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Serve1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
