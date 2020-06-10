import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-ironman',
  templateUrl: './ironman.component.html',
  styleUrls: ['./ironman.component.scss']
})
export class IronmanComponent implements OnInit {
  character = {
    alphabet: "I",
    name: "IRONMAN",
    realName: "TONY STARK",
    association: "MARVEL",
    quote: "You can take away my house, all my tricks and toys. One thing you can't take away, I am Iron Man.",
    description: "Genius. Billionaire. Playboy. Philanthropist. Tony's confidence is only matched by his high-flying abilities as the hero called Iron Man.",
    prev: "hulk",
    next: "itachi-uchiha"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "ironman",
    style.rel = "stylesheet",
    style.href = "assets/ironman.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
