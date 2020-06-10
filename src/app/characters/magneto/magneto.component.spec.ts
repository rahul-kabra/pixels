import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnetoComponent } from './magneto.component';

describe('MagnetoComponent', () => {
  let component: MagnetoComponent;
  let fixture: ComponentFixture<MagnetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagnetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagnetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
