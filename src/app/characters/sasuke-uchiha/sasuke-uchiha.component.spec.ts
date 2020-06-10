import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SasukeUchihaComponent } from './sasuke-uchiha.component';

describe('SasukeUchihaComponent', () => {
  let component: SasukeUchihaComponent;
  let fixture: ComponentFixture<SasukeUchihaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SasukeUchihaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SasukeUchihaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
