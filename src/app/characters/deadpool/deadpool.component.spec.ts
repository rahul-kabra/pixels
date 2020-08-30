import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DeadpoolComponent } from "./deadpool.component";

describe("DeadpoolComponent", () => {
  let component: DeadpoolComponent;
  let fixture: ComponentFixture<DeadpoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeadpoolComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});