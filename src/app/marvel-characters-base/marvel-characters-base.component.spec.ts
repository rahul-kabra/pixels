import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelCharactersBaseComponent } from './marvel-characters-base.component';

describe('MarvelCharactersBaseComponent', () => {
  let component: MarvelCharactersBaseComponent;
  let fixture: ComponentFixture<MarvelCharactersBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarvelCharactersBaseComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelCharactersBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});