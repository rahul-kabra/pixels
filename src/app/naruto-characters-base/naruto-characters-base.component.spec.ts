import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarutoCharactersBaseComponent } from './naruto-characters-base.component';

describe('NarutoCharactersBaseComponent', () => {
  let component: NarutoCharactersBaseComponent;
  let fixture: ComponentFixture<NarutoCharactersBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarutoCharactersBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarutoCharactersBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
