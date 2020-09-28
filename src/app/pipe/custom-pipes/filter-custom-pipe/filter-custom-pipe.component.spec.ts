import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCustomPipeComponent } from './filter-custom-pipe.component';

describe('FilterCustomPipeComponent', () => {
  let component: FilterCustomPipeComponent;
  let fixture: ComponentFixture<FilterCustomPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCustomPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
