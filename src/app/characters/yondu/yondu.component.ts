import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-yondu",
  templateUrl: "./yondu.component.html",
  styleUrls: ["./yondu.component.scss"],
})
export class YonduComponent implements OnInit {
  character = {
    alphabet: "Y",
    name: "YONDU",
    realName: "YONDU UDONTA",
    association: "MARVEL",
    quote: "I don't use my head to fly the arrow, boy. I use my heart.",
    description:
      "Adventurer and natural mystic, Yondu wields a mighty bow with Yaka arrows that move according to his whistles.",
    prev: "wonder-woman",
    next: "zatanna",
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    (style.id = "yondu"),
      (style.rel = "stylesheet"),
      (style.href = "assets/yondu.css");
    head.appendChild(style);
  }

  ngOnInit() {}
}