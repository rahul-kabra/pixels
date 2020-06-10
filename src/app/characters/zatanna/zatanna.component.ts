import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-zatanna',
  templateUrl: './zatanna.component.html',
  styleUrls: ['./zatanna.component.scss']
})
export class ZatannaComponent implements OnInit {
  character = {
    alphabet: "Z",
    name: "ZATANNA",
    realName: "Zatanna Zatara",
    association: "DC",
    quote: "I could swear there's a twinkle of magic in your eyes. Or is it just pride in a job well done?",
    description: "Intelligent, confident, self-assured and able to manipulate reality itself with her vast magical abilities, Zatanna balances her time as a skilled stage illusionist with battling the dark arts alongside some of the world’s greatest super heroes.",
    prev: "yondu",
    next: "ant-man"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "zatanna",
    style.rel = "stylesheet",
    style.href = "assets/zatanna.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
