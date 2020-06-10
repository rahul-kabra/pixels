import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenLanternComponent } from './green-lantern.component';

describe('GreenLanternComponent', () => {
  let component: GreenLanternComponent;
  let fixture: ComponentFixture<GreenLanternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenLanternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenLanternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
