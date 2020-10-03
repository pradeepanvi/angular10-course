import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestingRoutesComponent } from './nesting-routes.component';

describe('NestingRoutesComponent', () => {
  let component: NestingRoutesComponent;
  let fixture: ComponentFixture<NestingRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestingRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestingRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
