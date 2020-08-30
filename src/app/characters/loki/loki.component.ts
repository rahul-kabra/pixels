import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-loki",
  templateUrl: "./loki.component.html",
  styleUrls: ["./loki.component.scss"],
})
export class LokiComponent implements OnInit {
  character = {
    alphabet: "L",
    name: "LOKI",
    realName: "",
    association: "MARVEL",
    quote: "I am Loki of Asgard, and I am burdened with glorious purpose.",
    description:
      "God of Mischief and brother to Thor, Loki’s tricks and schemes wreak havoc across the realms.",
    prev: "kakashi-hatake",
    next: "magneto",
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    (style.id = "loki"),
      (style.rel = "stylesheet"),
      (style.href = "assets/loki.css");
    head.appendChild(style);
  }

  ngOnInit() {}
}