import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-sasuke-uchiha',
  templateUrl: './sasuke-uchiha.component.html',
  styleUrls: ['./sasuke-uchiha.component.scss']
})
export class SasukeUchihaComponent implements OnInit {
  character = {
    alphabet: "S",
    name: "SASUKE UCHIHA",
    realName: "",
    association: "NARUTO",
    quote: "I understand now. Even if I must take the devil's fruit, I must gain power. I am an avenger.",
    description: "Lone survivor of the Uchiha clan, Sasuke betrayed Konoha to follow his own obsession with revenge. But eventually, he regretted his past actions and atoned for it and pledged to save the Leaf Village from the shadows.",
    prev: "rogue",
    next: "scarlet-witch"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "sasuke-uchiha",
    style.rel = "stylesheet",
    style.href = "assets/sasuke-uchiha.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
