import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HulkComponent } from "./hulk.component";

describe("HulkComponent", () => {
  let component: HulkComponent;
  let fixture: ComponentFixture<HulkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HulkComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HulkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});