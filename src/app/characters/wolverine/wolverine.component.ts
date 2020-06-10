import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-wolverine',
  templateUrl: './wolverine.component.html',
  styleUrls: ['./wolverine.component.scss']
})
export class WolverineComponent implements OnInit {
  character = {
    alphabet: "W",
    name: "WOLVERINE",
    realName: "LOGAN",
    association: "MARVEL",
    quote: "I'm the best there is at what I do but what I do best isn't very nice.",
    description: "A mutant with an unstoppable healing power, adamantium metal claws and no-nonsense attitude makes the man called Logan, one of the most ferocious heroes in the universe.",
    prev: "war-machine",
    next: "wonder-woman"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "wolverine",
    style.rel = "stylesheet",
    style.href = "../assets/wolverine.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
