import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-war-machine",
  templateUrl: "./war-machine.component.html",
  styleUrls: ["./war-machine.component.scss"],
})
export class WarMachineComponent implements OnInit {
  character = {
    alphabet: "W",
    name: "WAR MACHINE",
    realName: "JAMES RHODES",
    association: "MARVEL",
    quote:
      "If you want this suit, you're going to have to pry my cold dead body out of it.",
    description:
      "Military veteran James Rhodes is ready for combat in his advanced armor, adding a formidable arsenal to Tony Stark-created designs.",
    prev: "vision",
    next: "wolverine",
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    (style.id = "war-machine"),
      (style.rel = "stylesheet"),
      (style.href = "assets/war-machine.css");
    head.appendChild(style);
  }

  ngOnInit() {}
}