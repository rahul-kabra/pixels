import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-wonder-woman",
  templateUrl: "./wonder-woman.component.html",
  styleUrls: ["./wonder-woman.component.scss"],
})
export class WonderWomanComponent implements OnInit {
  character = {
    alphabet: "W",
    name: "WONDER WOMAN",
    realName: "DIANA PRINCE",
    association: "DC",
    quote: "I will fight for those who cannot fight for themselves.",
    description:
      "Beautiful as Aphrodite, wise as Athena, swifter than Hermes, and stronger than Hercules, Princess Diana of Themyscira fights for peace in Man's World.",
    prev: "wolverine",
    next: "yondu",
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    (style.id = "wonder-woman"),
      (style.rel = "stylesheet"),
      (style.href = "assets/wonder-woman.css");
    head.appendChild(style);
  }

  ngOnInit() {}
}