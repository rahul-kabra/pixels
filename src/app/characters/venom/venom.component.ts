import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-venom',
  templateUrl: './venom.component.html',
  styleUrls: ['./venom.component.scss']
})
export class VenomComponent implements OnInit {
  character = {
    alphabet: "V",
    name: "VENOM",
    realName: "EDDIE BROCK",
    association: "MARVEL",
    quote: "If Eddie is good, why do we disagree? If disagree... Am I a monster? Parasite? Bad?",
    description: "Bonding with an unearthly symbiote, Eddie Brock is given amazing powers and an unstable psyche.",
    prev: "thor",
    next: "vision"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "venom",
    style.rel = "stylesheet",
    style.href = "../assets/venom.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
