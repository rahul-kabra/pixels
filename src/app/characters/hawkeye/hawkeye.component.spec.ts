import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HawkeyeComponent } from "./hawkeye.component";

describe("HawkeyeComponent", () => {
  let component: HawkeyeComponent;
  let fixture: ComponentFixture<HawkeyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HawkeyeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HawkeyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});