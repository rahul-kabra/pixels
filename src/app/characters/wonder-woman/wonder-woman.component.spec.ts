import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WonderWomanComponent } from './wonder-woman.component';

describe('WonderWomanComponent', () => {
  let component: WonderWomanComponent;
  let fixture: ComponentFixture<WonderWomanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WonderWomanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WonderWomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
