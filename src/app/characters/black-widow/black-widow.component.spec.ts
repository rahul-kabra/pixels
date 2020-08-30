import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BlackWidowComponent } from "./black-widow.component";

describe("BlackWidowComponent", () => {
  let component: BlackWidowComponent;
  let fixture: ComponentFixture<BlackWidowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlackWidowComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackWidowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});