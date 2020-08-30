import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MartianManhunterComponent } from "./martian-manhunter.component";

describe("MartianManhunterComponent", () => {
  let component: MartianManhunterComponent;
  let fixture: ComponentFixture<MartianManhunterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MartianManhunterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MartianManhunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});