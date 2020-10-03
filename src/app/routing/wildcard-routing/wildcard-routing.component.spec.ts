import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcardRoutingComponent } from './wildcard-routing.component';

describe('WildcardRoutingComponent', () => {
  let component: WildcardRoutingComponent;
  let fixture: ComponentFixture<WildcardRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildcardRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildcardRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
