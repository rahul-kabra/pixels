import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AntManComponent } from "./ant-man.component";

describe("AntManComponent", () => {
  let component: AntManComponent;
  let fixture: ComponentFixture<AntManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AntManComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});