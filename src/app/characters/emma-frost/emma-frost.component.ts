import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-emma-frost',
  templateUrl: './emma-frost.component.html',
  styleUrls: ['./emma-frost.component.scss']
})
export class EmmaFrostComponent implements OnInit {
  character = {
    alphabet: "E",
    name: "WHITE QUEEN",
    realName: "EMMA FROST",
    association: "MARVEL",
    quote: "I'm a diamond Ms. Pryde. I am by definition, my own best friend.",
    description: "The White Queen of the Hellfire Club, Emma Frost is a powerful mutant telepath who can transform herself into organic diamond.",
    prev: "doctor-strange",
    next: "falcon"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "emma-frost",
    style.rel = "stylesheet",
    style.href = "../assets/emma-frost.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
