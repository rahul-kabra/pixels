import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-obito-uchiha",
  templateUrl: "./obito-uchiha.component.html",
  styleUrls: ["./obito-uchiha.component.scss"],
})
export class ObitoUchihaComponent implements OnInit {
  character = {
    alphabet: "O",
    name: "OBITO UCHIHA",
    realName: "",
    association: "NARUTO",
    quote:
      "In the ninja world,  those who don't follow the rules are trash. But those who abandon their friends are worse than trash.",
    description:
      "Obito inherited Madara's plan of The Infinite Tsukuyomi and started the war. But he had a change of heart, and so he sacrificed his life to save the same world he sought to replace.",
    prev: "nightcrawler",
    next: "peter-parker",
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    (style.id = "obito-uchiha"),
      (style.rel = "stylesheet"),
      (style.href = "assets/obito-uchiha.css");
    head.appendChild(style);
  }

  ngOnInit() {}
}