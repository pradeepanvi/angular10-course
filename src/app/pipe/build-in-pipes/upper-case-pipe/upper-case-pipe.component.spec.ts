import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperCasePipeComponent } from './upper-case-pipe.component';

describe('UpperCasePipeComponent', () => {
  let component: UpperCasePipeComponent;
  let fixture: ComponentFixture<UpperCasePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperCasePipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperCasePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
