import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptainMarvelComponent } from './captain-marvel.component';

describe('CaptainMarvelComponent', () => {
  let component: CaptainMarvelComponent;
  let fixture: ComponentFixture<CaptainMarvelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptainMarvelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptainMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
