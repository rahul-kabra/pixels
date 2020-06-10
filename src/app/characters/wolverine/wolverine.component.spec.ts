import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WolverineComponent } from './wolverine.component';

describe('WolverineComponent', () => {
  let component: WolverineComponent;
  let fixture: ComponentFixture<WolverineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WolverineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WolverineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
