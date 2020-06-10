import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconComponent } from './falcon.component';

describe('FalconComponent', () => {
  let component: FalconComponent;
  let fixture: ComponentFixture<FalconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FalconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FalconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
