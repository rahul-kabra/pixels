import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-peter-parker",
  templateUrl: "./peter-parker.component.html",
  styleUrls: ["./peter-parker.component.scss"],
})
export class PeterParkerComponent implements OnInit {
  character = {
    alphabet: "P",
    name: "SPIDERMAN",
    realName: "PETER PARKER",
    association: "MARVEL",
    quote:
      "When you can do the things that I can, but you don't, and then the bad things happen...",
    description:
      "Bitten by a radioactive spider, Peter Parker's arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.",
    prev: "obito-uchiha",
    next: "quill",
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    (style.id = "peter-parker"),
      (style.rel = "stylesheet"),
      (style.href = "assets/peter-parker.css");
    head.appendChild(style);
  }

  ngOnInit() {}
}