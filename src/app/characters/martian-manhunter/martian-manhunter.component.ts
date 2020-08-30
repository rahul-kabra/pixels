import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-martian-manhunter",
  templateUrl: "./martian-manhunter.component.html",
  styleUrls: ["./martian-manhunter.component.scss"],
})
export class MartianManhunterComponent implements OnInit {
  character = {
    alphabet: "M",
    name: "MARTIAN MANHUNTER",
    realName: "J'onn J'onzz",
    association: "DC",
    quote: "A reasonable person would yield.",
    description:
      "One of the last surviving members of his species, the Martian Manhunter wields such powers as the ability to shape-shift, telepathy, flight, inivisibility, phasing, super-strength and Martian vision.",
    prev: "magneto",
    next: "naruto-uzumaki",
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    (style.id = "martian-manhunter"),
      (style.rel = "stylesheet"),
      (style.href = "assets/martian-manhunter.css");
    head.appendChild(style);
  }

  ngOnInit() {}
}