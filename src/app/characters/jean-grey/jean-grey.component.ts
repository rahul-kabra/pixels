import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-jean-grey",
  templateUrl: "./jean-grey.component.html",
  styleUrls: ["./jean-grey.component.scss"],
})
export class JeanGreyComponent implements OnInit {
  character = {
    alphabet: "J",
    name: "PHOENIX",
    realName: "JEAN GREY",
    association: "MARVEL",
    quote: "Fools! You dare to trifle with the Phoenix?",
    description:
      "One of the five original X-Men, Jean Grey is an omega-level mutant telekinetic and telepath and has gained near limitless powers as a recurrent host of the Phoenix Force.",
    prev: "itachi-uchiha",
    next: "kakashi-hatake",
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    (style.id = "jean-grey"),
      (style.rel = "stylesheet"),
      (style.href = "assets/jean-grey.css");
    head.appendChild(style);
  }

  ngOnInit() {}
}