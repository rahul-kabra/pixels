import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-captain-america",
  templateUrl: "./captain-america.component.html",
  styleUrls: ["./captain-america.component.scss"],
})
export class CaptainAmericaComponent implements OnInit {
  character = {
    alphabet: "C",
    name: "CAPTAIN AMERICA",
    realName: "STEVE ROGERS",
    association: "MARVEL",
    quote: "I can do this all day...",
    description:
      "Recipient of the Super Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world's mightiest heroes and the leader of the Avengers.",
    prev: "black-widow",
    next: "captain-marvel",
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    (style.id = "captain-america"),
      (style.rel = "stylesheet"),
      (style.href = "assets/captain-america.css");
    head.appendChild(style);
  }

  ngOnInit() {}
}