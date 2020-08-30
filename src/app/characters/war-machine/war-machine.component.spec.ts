import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WarMachineComponent } from "./war-machine.component";

describe("WarMachineComponent", () => {
  let component: WarMachineComponent;
  let fixture: ComponentFixture<WarMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WarMachineComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});