import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NightcrawlerComponent } from "./nightcrawler.component";

describe("NightcrawlerComponent", () => {
  let component: NightcrawlerComponent;
  let fixture: ComponentFixture<NightcrawlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NightcrawlerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightcrawlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});