import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NarutoUzumakiComponent } from "./naruto-uzumaki.component";

describe("NarutoUzumakiComponent", () => {
  let component: NarutoUzumakiComponent;
  let fixture: ComponentFixture<NarutoUzumakiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NarutoUzumakiComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarutoUzumakiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});