import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-batman',
  templateUrl: './batman.component.html',
  styleUrls: ['./batman.component.scss']
})
export class BatmanComponent implements OnInit {
  character = {
    alphabet: "B",
    name: "BATMAN",
    realName: "BRUCE WAYNE",
    association: "DC",
    quote: "It's not who I am underneath, but what I do that defines me.",
    description: "In the name of his murdered parents, Bruce Wayne wages eternal war on the criminals of Gotham City. He is vengeance. He is the night. He is Batman.",
    prev: "aquaman",
    next: "black-panther"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "batman",
    style.rel = "stylesheet",
    style.href = "../assets/batman.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
