import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAndDatabindingDeepDiveComponent } from './component-and-databinding-deep-dive.component';

describe('ComponentAndDatabindingDeepDiveComponent', () => {
  let component: ComponentAndDatabindingDeepDiveComponent;
  let fixture: ComponentFixture<ComponentAndDatabindingDeepDiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentAndDatabindingDeepDiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentAndDatabindingDeepDiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
