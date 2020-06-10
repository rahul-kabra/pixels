import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-black-panther',
  templateUrl: './black-panther.component.html',
  styleUrls: ['./black-panther.component.scss']
})
export class BlackPantherComponent implements OnInit {
  character = {
    alphabet: "B",
    name: "BLACK PANTHER",
    realName: "T'CHALLA",
    association: "MARVEL",
    quote: "Wakanda will no longer watch from the shadows. We cannot. We must not.",
    description: "T'Challa is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther.",
    prev: "batman",
    next: "black-widow"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "black-panther",
    style.rel = "stylesheet",
    style.href = "assets/black-panther.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
