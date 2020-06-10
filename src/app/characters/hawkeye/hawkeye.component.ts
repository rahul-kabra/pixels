import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-hawkeye',
  templateUrl: './hawkeye.component.html',
  styleUrls: ['./hawkeye.component.scss']
})
export class HawkeyeComponent implements OnInit {
  character = {
    alphabet: "H",
    name: "HAWKEYE",
    realName: "CLINT BARTON",
    association: "MARVEL",
    quote: "Just can't seem to miss.",
    description: "A  master marksman and longtime friend of Black Widow. Clint Barton serves as the Avengers' amazing archer.",
    prev: "green-lantern",
    next: "hawkgirl"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "hawkeye",
    style.rel = "stylesheet",
    style.href = "assets/hawkeye.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
