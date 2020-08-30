import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DoctorStrangeComponent } from "./doctor-strange.component";

describe("DoctorStrangeComponent", () => {
  let component: DoctorStrangeComponent;
  let fixture: ComponentFixture<DoctorStrangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorStrangeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorStrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});