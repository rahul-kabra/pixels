import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-rogue",
  templateUrl: "./rogue.component.html",
  styleUrls: ["./rogue.component.scss"],
})
export class RogueComponent implements OnInit {
  character = {
    alphabet: "R",
    name: "ROGUE",
    realName: "ANNA MARIE",
    association: "MARVEL",
    quote: "Let's go to work then. We have a world to save.",
    description:
      "Armed with the ability to temporarily absorb others’ powers and memories, this Mississippi runaway started her career as a villain before joining the X-Men to fight for good.",
    prev: "quill",
    next: "sasuke-uchiha",
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    (style.id = "rogue"),
      (style.rel = "stylesheet"),
      (style.href = "assets/rogue.css");
    head.appendChild(style);
  }

  ngOnInit() {}
}