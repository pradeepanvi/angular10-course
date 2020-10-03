import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Serve2Component } from './serve2.component';

describe('Serve2Component', () => {
  let component: Serve2Component;
  let fixture: ComponentFixture<Serve2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Serve2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Serve2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
