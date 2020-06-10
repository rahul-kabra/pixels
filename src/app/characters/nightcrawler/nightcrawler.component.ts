import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nightcrawler',
  templateUrl: './nightcrawler.component.html',
  styleUrls: ['./nightcrawler.component.scss']
})
export class NightcrawlerComponent implements OnInit {
  character = {
    alphabet: "N",
    name: "NIGHTCRAWLER",
    realName: "KURT WAGNER",
    association: "MARVEL",
    quote: "You have the instincts of a hero, my friend. But above all, the soul of a good man.",
    description: "Kurt Wagner is a prominent meber of the X-Men and former member and leader of Excalibur. He possessess the Neyaphemiam ability of teleportation, as well as incredible agility, wall scaling and a prehensile tail.",
    prev: "naruto-uzumaki",
    next: "obito-uchiha"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "nightcrawler",
    style.rel = "stylesheet",
    style.href = "assets/nightcrawler.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
