import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-green-lantern",
  templateUrl: "./green-lantern.component.html",
  styleUrls: ["./green-lantern.component.scss"],
})
export class GreenLanternComponent implements OnInit {
  character = {
    alphabet: "G",
    name: "GREEN LANTERN",
    realName: "HAL JORDAN",
    association: "DC",
    quote:
      "Let all who worship evil's might, Beware my power, Green Lantern's light!",
    description:
      "Test pilot Hal Jordan went from being a novelty, the first-ever human Green Lantern, to one of the most legendary Lanterns to ever wield a power ring.",
    prev: "flash",
    next: "hawkeye",
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    (style.id = "green-lantern"),
      (style.rel = "stylesheet"),
      (style.href = "assets/green-lantern.css");
    head.appendChild(style);
  }

  ngOnInit() {}
}