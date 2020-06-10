import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-thor',
  templateUrl: './thor.component.html',
  styleUrls: ['./thor.component.scss']
})
export class ThorComponent implements OnInit {
  character = {
    alphabet: "T",
    name: "THOR",
    realName: "THOR ODINSON",
    association: "MARVEL",
    quote: "I choose to run towards my problems and not away from them. Because that's what heroes do.",
    description: "The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike.",
    prev: "thanos",
    next: "venom"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "thor",
    style.rel = "stylesheet",
    style.href = "assets/thor.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
