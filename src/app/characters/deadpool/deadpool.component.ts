import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-deadpool',
  templateUrl: './deadpool.component.html',
  styleUrls: ['./deadpool.component.scss']
})
export class DeadpoolComponent implements OnInit {
  character = {
    alphabet: "D",
    name: "DEADPOOL",
    realName: "WADE WILSON",
    association: "MARVEL",
    quote: "Come on! Someone has to die for real! I mean, what is this, a Marvel comic?!",
    description: "Ever-quipping mercenary Wade Wilson’s healing factor—and big mouth—make him one of the most relentlessly wisecracking heroes in the universe.",
    prev: "cyclops",
    next: "doctor-strange"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "deadpool",
    style.rel = "stylesheet",
    style.href = "assets/deadpool.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
