import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerCasePipeComponent } from './lower-case-pipe.component';

describe('LowerCasePipeComponent', () => {
  let component: LowerCasePipeComponent;
  let fixture: ComponentFixture<LowerCasePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowerCasePipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowerCasePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
