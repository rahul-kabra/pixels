import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-hulk',
  templateUrl: './hulk.component.html',
  styleUrls: ['./hulk.component.scss']
})
export class HulkComponent implements OnInit {
  character = {
    alphabet: "H",
    name: "HULK",
    realName: "BRUCE BANNER",
    association: "MARVEL",
    quote: "I just get so angry all the time! Hulk always... Always angry.",
    description: "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he's always been and the uncontrollable green monster powered by his rage.",
    prev: "hawkgirl",
    next: "ironman"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "hulk",
    style.rel = "stylesheet",
    style.href = "assets/hulk.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
