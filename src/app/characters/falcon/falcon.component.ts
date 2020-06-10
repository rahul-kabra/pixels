import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-falcon',
  templateUrl: './falcon.component.html',
  styleUrls: ['./falcon.component.scss']
})
export class FalconComponent implements OnInit {
  character = {
    alphabet: "F",
    name: "FALCON",
    realName: "SAM WILSON",
    association: "MARVEL",
    quote: "Don't look at me, I do what he does, just slower.",
    description: "Set with his signature mechanical wings, Sam Wilson teams up as an Avenger alongside his longtime partner Captain America.",
    prev: "emma-frost",
    next: "flash"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "falcon",
    style.rel = "stylesheet",
    style.href = "assets/falcon.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
