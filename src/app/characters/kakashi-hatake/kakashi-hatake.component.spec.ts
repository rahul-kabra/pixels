import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { KakashiHatakeComponent } from "./kakashi-hatake.component";

describe("KakashiHatakeComponent", () => {
  let component: KakashiHatakeComponent;
  let fixture: ComponentFixture<KakashiHatakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KakashiHatakeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KakashiHatakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});