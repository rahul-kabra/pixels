import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AquamanComponent } from './aquaman.component';

describe('AquamanComponent', () => {
  let component: AquamanComponent;
  let fixture: ComponentFixture<AquamanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AquamanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AquamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
