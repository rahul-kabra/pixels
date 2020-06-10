import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItachiUchihaComponent } from './itachi-uchiha.component';

describe('ItachiUchihaComponent', () => {
  let component: ItachiUchihaComponent;
  let fixture: ComponentFixture<ItachiUchihaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItachiUchihaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItachiUchihaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
