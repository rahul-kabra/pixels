import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-quill",
  templateUrl: "./quill.component.html",
  styleUrls: ["./quill.component.scss"],
})
export class QuillComponent implements OnInit {
  character = {
    alphabet: "Q",
    name: "STAR-LORD",
    realName: "PETER QUILL",
    association: "MARVEL",
    quote:
      "Well, I come from a planet of outlaws. Billy The Kid, Bonnie and Clyde, John Stamos.",
    description:
      "Leader of the Guardians of the Galaxy, Peter Quill, known as Star-Lord, brings a sassy sense of humor while protecting the universe from any and all threats.",
    prev: "peter-parker",
    next: "rogue",
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    (style.id = "quill"),
      (style.rel = "stylesheet"),
      (style.href = "assets/quill.css");
    head.appendChild(style);
  }

  ngOnInit() {}
}