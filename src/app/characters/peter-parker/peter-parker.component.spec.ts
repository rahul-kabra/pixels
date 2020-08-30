import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PeterParkerComponent } from "./peter-parker.component";

describe("PeterParkerComponent", () => {
  let component: PeterParkerComponent;
  let fixture: ComponentFixture<PeterParkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PeterParkerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeterParkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});