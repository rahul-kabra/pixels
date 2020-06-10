import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScarletWitchComponent } from './scarlet-witch.component';

describe('ScarletWitchComponent', () => {
  let component: ScarletWitchComponent;
  let fixture: ComponentFixture<ScarletWitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScarletWitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScarletWitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
