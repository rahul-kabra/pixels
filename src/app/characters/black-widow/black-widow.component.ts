import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-black-widow',
  templateUrl: './black-widow.component.html',
  styleUrls: ['./black-widow.component.scss']
})
export class BlackWidowComponent implements OnInit {
  character = {
    alphabet: "B",
    name: "BLACK WIDOW",
    realName: "NATASHA ROMANOFF",
    association: "MARVEL",
    quote: "Regimes fall every day. I tend not to weep over that. I'm Russian. Or, I was.",
    description: "Despite super spy Natasha's checkered past, she's become one of S.H.I.E.L.D.'s most deadly assassins and a frequent memeber of the Avengers.",
    prev: "black-panther",
    next: "captain-america"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "black-widow",
    style.rel = "stylesheet",
    style.href = "../assets/black-widow.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
