import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-hawkgirl',
  templateUrl: './hawkgirl.component.html',
  styleUrls: ['./hawkgirl.component.scss']
})
export class HawkgirlComponent implements OnInit {
  character = {
    alphabet: "H",
    name: "HAWKGIRL",
    realName: "KENDRA SAUNDERS",
    association: "DC",
    quote: "I'm used to being thanked when I save someone.",
    description: "An immortal warrior who's been reborn into countless lives, Kendra Saunders uses her past to plot a course for a brighter future.",
    prev: "hawkeye",
    next: "hulk"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "hawkgirl",
    style.rel = "stylesheet",
    style.href = "assets/hawkgirl.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
