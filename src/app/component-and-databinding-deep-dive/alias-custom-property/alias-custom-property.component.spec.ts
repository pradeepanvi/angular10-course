import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliasCustomPropertyComponent } from './alias-custom-property.component';

describe('AliasCustomPropertyComponent', () => {
  let component: AliasCustomPropertyComponent;
  let fixture: ComponentFixture<AliasCustomPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliasCustomPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliasCustomPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
