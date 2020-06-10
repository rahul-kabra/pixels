import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-itachi-uchiha',
  templateUrl: './itachi-uchiha.component.html',
  styleUrls: ['./itachi-uchiha.component.scss']
})
export class ItachiUchihaComponent implements OnInit {
  character = {
    alphabet: "I",
    name: "ITACHI UCHIHA",
    realName: "",
    association: "NARUTO",
    quote: "It is foolish to fear what we have yet to see and know.",
    description: "The pride of the Uchiha clan who joined the Akatsuki to serve as a double agent for the Leaf village and save it from within the shadows. What Itachi was, no one ever will.",
    prev: "ironman",
    next: "jean-grey"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "itachi-uchiha",
    style.rel = "stylesheet",
    style.href = "assets/itachi-uchiha.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
