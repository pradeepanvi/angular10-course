import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildInPipesComponent } from './build-in-pipes.component';

describe('BuildInPipesComponent', () => {
  let component: BuildInPipesComponent;
  let fixture: ComponentFixture<BuildInPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildInPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildInPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
