import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthCustomPipeComponent } from './strength-custom-pipe.component';

describe('StrengthCustomPipeComponent', () => {
  let component: StrengthCustomPipeComponent;
  let fixture: ComponentFixture<StrengthCustomPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrengthCustomPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthCustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
