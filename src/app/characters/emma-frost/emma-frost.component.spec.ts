import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmmaFrostComponent } from './emma-frost.component';

describe('EmmaFrostComponent', () => {
  let component: EmmaFrostComponent;
  let fixture: ComponentFixture<EmmaFrostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmmaFrostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmmaFrostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
