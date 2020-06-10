import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-thanos',
  templateUrl: './thanos.component.html',
  styleUrls: ['./thanos.component.scss']
})
export class ThanosComponent implements OnInit {
  character = {
    alphabet: "T",
    name: "THANOS",
    realName: "",
    association: "MARVEL",
    quote: "Fun isn't something one considers when balancing the universe... This does put smile on my face.",
    description: "The Mad Titan Thanos quests across the universe in search of the Infinity Stones, intending to use their limitless power for shocking purposes.",
    prev: "superman",
    next: "thor"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "thanos",
    style.rel = "stylesheet",
    style.href = "../assets/thanos.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
