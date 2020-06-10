import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.scss']
})
export class FlashComponent implements OnInit {
  character = {
    alphabet: "F",
    name: "FLASH",
    realName: "BARRY ALLEN",
    association: "DC",
    quote: "Sometimes the only way to move forward is to revisit the things in your past that were holding you back.",
    description: "The Flash has mastery over not just speed, but time itself, and he has often used his powers to travel though different eras and even into other dimensions.",
    prev: "falcon",
    next: "green-lantern"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "flash",
    style.rel = "stylesheet",
    style.href = "assets/flash.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
