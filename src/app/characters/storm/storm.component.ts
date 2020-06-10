import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-storm',
  templateUrl: './storm.component.html',
  styleUrls: ['./storm.component.scss']
})
export class StormComponent implements OnInit {
  character = {
    alphabet: "S",
    name: "STORM",
    realName: "ORORO MUNROE",
    association: "MARVEL",
    quote: "I'm a mutant with the power to control the weather. Here's where I belong.",
    description: "Mutant Ororo Munroe confounds enemies of the X-Men by using her psionic abilities to manipulate the weather.",
    prev: "scarlet-witch",
    next: "superman"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "storm",
    style.rel = "stylesheet",
    style.href = "../assets/storm.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
