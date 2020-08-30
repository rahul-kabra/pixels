import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-doctor-strange",
  templateUrl: "./doctor-strange.component.html",
  styleUrls: ["./doctor-strange.component.scss"],
})
export class DoctorStrangeComponent implements OnInit {
  character = {
    alphabet: "D",
    name: "DOCTOR STRANGE",
    realName: "STEPHEN STRANGE",
    association: "MARVEL",
    quote:
      "End your assault on my world. Never come back. Do it and I'll break the loop.",
    description:
      "Formerly a renowned surgeon, Doctor Stephen Strange now serves as the Sorcerer Supreme—Earth’s foremost protector against magical and mystical threats.",
    prev: "deadpool",
    next: "emma-frost",
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    (style.id = "doctor-strange"),
      (style.rel = "stylesheet"),
      (style.href = "assets/doctor-strange.css");
    head.appendChild(style);
  }

  ngOnInit() {}
}