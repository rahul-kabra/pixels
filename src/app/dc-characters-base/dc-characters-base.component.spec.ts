import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcCharactersBaseComponent } from './dc-characters-base.component';

describe('DcCharactersBaseComponent', () => {
  let component: DcCharactersBaseComponent;
  let fixture: ComponentFixture<DcCharactersBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcCharactersBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcCharactersBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
