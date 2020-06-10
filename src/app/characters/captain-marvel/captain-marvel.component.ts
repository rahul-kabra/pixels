import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-captain-marvel',
  templateUrl: './captain-marvel.component.html',
  styleUrls: ['./captain-marvel.component.scss']
})
export class CaptainMarvelComponent implements OnInit {
  character = {
    alphabet: "C",
    name: "CAPTAIN MARVEL",
    realName: "CAROL DANVERS",
    association: "MARVEL",
    quote: "Lets' rewrite some history, shall we?",
    description: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war betwen two alien races.",
    prev: "captain-america",
    next: "cyclops"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "captain-marvel",
    style.rel = "stylesheet",
    style.href = "assets/captain-marvel.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
