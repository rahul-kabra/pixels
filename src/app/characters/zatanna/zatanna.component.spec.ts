import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZatannaComponent } from './zatanna.component';

describe('ZatannaComponent', () => {
  let component: ZatannaComponent;
  let fixture: ComponentFixture<ZatannaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZatannaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZatannaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
