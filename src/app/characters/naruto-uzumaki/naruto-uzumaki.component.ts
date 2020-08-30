import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-naruto-uzumaki",
  templateUrl: "./naruto-uzumaki.component.html",
  styleUrls: ["./naruto-uzumaki.component.scss"],
})
export class NarutoUzumakiComponent implements OnInit {
  character = {
    alphabet: "N",
    name: "NARUTO UZUMAKI",
    realName: "",
    association: "NARUTO",
    quote:
      "I'm not gunna run away, I never go back on my word! That's my nindo - my ninja way.",
    description:
      "Naruto, a Leaf shinobi and the jinchuriki of the Nine-Tails faced a lot of scorn throughout his childhood. However, by sheer hard work and determination and a never-give-up attitude, he became the Seventh Hokage.",
    prev: "martian-manhunter",
    next: "nightcrawler",
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    (style.id = "naruto-uzumaki"),
      (style.rel = "stylesheet"),
      (style.href = "assets/naruto-uzumaki.css");
    head.appendChild(style);
  }

  ngOnInit() {}
}