import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-magneto',
  templateUrl: './magneto.component.html',
  styleUrls: ['./magneto.component.scss']
})
export class MagnetoComponent implements OnInit {
  character = {
    alphabet: "M",
    name: "MAGNETO",
    realName: "MAX EISENHARDT",
    association: "MARVEL",
    quote: "Right now, the world doesn't need heroes. It needs villains.",
    description: "The powerful mutant Magneto uses his ability to control magnetic fields to help mutants replaces humans as the dominant species, as he believes in their superiority.",
    prev: "loki",
    next: "martian-manhunter"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "magneto",
    style.rel = "stylesheet",
    style.href = "../assets/magneto.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
