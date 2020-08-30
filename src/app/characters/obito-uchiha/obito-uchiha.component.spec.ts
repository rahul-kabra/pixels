import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ObitoUchihaComponent } from "./obito-uchiha.component";

describe("ObitoUchihaComponent", () => {
  let component: ObitoUchihaComponent;
  let fixture: ComponentFixture<ObitoUchihaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ObitoUchihaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObitoUchihaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});