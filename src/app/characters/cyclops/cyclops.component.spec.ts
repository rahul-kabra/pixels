import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclopsComponent } from './cyclops.component';

describe('CyclopsComponent', () => {
  let component: CyclopsComponent;
  let fixture: ComponentFixture<CyclopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
