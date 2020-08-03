import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliasCustomEventComponent } from './alias-custom-event.component';

describe('AliasCustomEventComponent', () => {
  let component: AliasCustomEventComponent;
  let fixture: ComponentFixture<AliasCustomEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliasCustomEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliasCustomEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
