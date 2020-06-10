import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YonduComponent } from './yondu.component';

describe('YonduComponent', () => {
  let component: YonduComponent;
  let fixture: ComponentFixture<YonduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YonduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YonduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
