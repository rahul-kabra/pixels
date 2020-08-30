import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-aquaman",
  templateUrl: "./aquaman.component.html",
  styleUrls: ["./aquaman.component.scss"],
})
export class AquamanComponent implements OnInit {
  character = {
    alphabet: "A",
    name: "AQUAMAN",
    realName: "ARTHUR CURRY",
    association: "DC",
    quote: "I'm a blunt instrument and I'm damn good at it.",
    description:
      "Monarch of the undersea realm of Atlantis and King of the Seven Seas, Aquaman is one of the most powerful DC Super Heroes—commanding a kingdom that covers three-quarters of the Earth’s surface, including all the creatures contained within.",
    prev: "ant-man",
    next: "batman",
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    (style.id = "aquaman"),
      (style.rel = "stylesheet"),
      (style.href = "assets/aquaman.css");
    head.appendChild(style);
  }

  ngOnInit() {}
}