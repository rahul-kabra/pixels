import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HawkgirlComponent } from "./hawkgirl.component";

describe("HawkgirlComponent", () => {
  let component: HawkgirlComponent;
  let fixture: ComponentFixture<HawkgirlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HawkgirlComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HawkgirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});