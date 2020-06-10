import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StormComponent } from './storm.component';

describe('StormComponent', () => {
  let component: StormComponent;
  let fixture: ComponentFixture<StormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
