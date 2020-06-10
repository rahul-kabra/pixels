import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenomComponent } from './venom.component';

describe('VenomComponent', () => {
  let component: VenomComponent;
  let fixture: ComponentFixture<VenomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
