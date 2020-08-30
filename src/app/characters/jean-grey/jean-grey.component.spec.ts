import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { JeanGreyComponent } from "./jean-grey.component";

describe("JeanGreyComponent", () => {
  let component: JeanGreyComponent;
  let fixture: ComponentFixture<JeanGreyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JeanGreyComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeanGreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});