import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDeepDriveComponent } from './directive-deep-drive.component';

describe('DirectiveDeepDriveComponent', () => {
  let component: DirectiveDeepDriveComponent;
  let fixture: ComponentFixture<DirectiveDeepDriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveDeepDriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveDeepDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
