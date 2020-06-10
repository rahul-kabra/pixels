import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IronmanComponent } from './ironman.component';

describe('IronmanComponent', () => {
  let component: IronmanComponent;
  let fixture: ComponentFixture<IronmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IronmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IronmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
