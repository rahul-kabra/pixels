import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-cyclops",
  templateUrl: "./cyclops.component.html",
  styleUrls: ["./cyclops.component.scss"],
})
export class CyclopsComponent implements OnInit {
  character = {
    alphabet: "C",
    name: "CYCLOPS",
    realName: "SCOTT SUMMERS",
    association: "MARVEL",
    quote:
      "That's why I am a leader. The blind leading the blind, maybe.. but a leader nonetheless.",
    description:
      "The first X-Man, Scott Summers possesses the ability to draw ambient energy from another dimension through his eyes which are actually portals to the dimesnion, he actually channels this energy into concussive force blasts.",
    prev: "captain-marvel",
    next: "deadpool",
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    (style.id = "cyclops"),
      (style.rel = "stylesheet"),
      (style.href = "assets/cyclops.css");
    head.appendChild(style);
  }

  ngOnInit() {}
}