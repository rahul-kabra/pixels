import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-vision",
  templateUrl: "./vision.component.html",
  styleUrls: ["./vision.component.scss"],
})
export class VisionComponent implements OnInit {
  character = {
    alphabet: "V",
    name: "VISION",
    realName: "",
    association: "MARVEL",
    quote: "Maybe I am a monster. I don't think I'd know if I were one.",
    description:
      "The android called Vision defies physics and fights as an Avenger with the power of density manipulation and his flawless computer brain.",
    prev: "venom",
    next: "war-machine",
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    (style.id = "vision"),
      (style.rel = "stylesheet"),
      (style.href = "assets/vision.css");
    head.appendChild(style);
  }

  ngOnInit() {}
}