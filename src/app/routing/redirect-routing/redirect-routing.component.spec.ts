import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectRoutingComponent } from './redirect-routing.component';

describe('RedirectRoutingComponent', () => {
  let component: RedirectRoutingComponent;
  let fixture: ComponentFixture<RedirectRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
