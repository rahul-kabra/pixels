import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-ant-man",
  templateUrl: "./ant-man.component.html",
  styleUrls: ["./ant-man.component.scss"],
})
export class AntManComponent implements OnInit {
  character = {
    alphabet: "A",
    name: "ANTMAN",
    realName: "SCOTT LANG",
    association: "MARVEL",
    quote: "Does anyone have any orange slices?",
    description:
      "Overcoming his criminal past, Scott Lang follows in the tiny, yet mighty, footsteps of his predecessor as the size-changing hero known as Ant-Man!",
    prev: "zatanna",
    next: "aquaman",
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    (style.id = "ant-man"),
      (style.rel = "stylesheet"),
      (style.href = "assets/ant-man.css");
    head.appendChild(style);
  }

  ngOnInit() {}
}