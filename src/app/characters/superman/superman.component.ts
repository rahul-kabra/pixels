import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-superman",
  templateUrl: "./superman.component.html",
  styleUrls: ["./superman.component.scss"],
})
export class SupermanComponent implements OnInit {
  character = {
    alphabet: "S",
    name: "SUPERMAN",
    realName: "CLARK KENT",
    association: "DC",
    quote:
      "Sometimes you have to take a leap of faith first, the trust part comes later.",
    description:
      "The Man of Steel os the ultimate symbol of truth, justice and hope. He is the world's first superhero and a guiding light to all.",
    prev: "storm",
    next: "thanos",
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    (style.id = "superman"),
      (style.rel = "stylesheet"),
      (style.href = "assets/superman.css");
    head.appendChild(style);
  }

  ngOnInit() {}
}