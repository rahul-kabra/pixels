import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ThanosComponent } from "./thanos.component";

describe("ThanosComponent", () => {
  let component: ThanosComponent;
  let fixture: ComponentFixture<ThanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThanosComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});