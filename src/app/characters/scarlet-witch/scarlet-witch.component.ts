import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scarlet-witch',
  templateUrl: './scarlet-witch.component.html',
  styleUrls: ['./scarlet-witch.component.scss']
})
export class ScarletWitchComponent implements OnInit {
  character = {
    alphabet: "S",
    name: "SCARLET WITCH",
    realName: "WANDA MAXIMOFF",
    association: "MARVEL",
    quote: "I used to think myself one way. But, after this, I am something else.",
    description: "Notably powerful, Wanda Maximoff has fought both against and with the Avengers, attempting to hone her abilities and do what she believes is right to help the world.",
    prev: "sasuke-uchiha",
    next: "storm"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "scarlet-witch",
    style.rel = "stylesheet",
    style.href = "../assets/scarlet-witch.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
