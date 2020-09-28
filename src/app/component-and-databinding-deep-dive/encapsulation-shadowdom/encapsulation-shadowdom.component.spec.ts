import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationShadowdomComponent } from './encapsulation-shadowdom.component';

describe('EncapsulationShadowdomComponent', () => {
  let component: EncapsulationShadowdomComponent;
  let fixture: ComponentFixture<EncapsulationShadowdomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncapsulationShadowdomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncapsulationShadowdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
