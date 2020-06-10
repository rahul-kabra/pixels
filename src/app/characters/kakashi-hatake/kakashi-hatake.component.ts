import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-kakashi-hatake',
  templateUrl: './kakashi-hatake.component.html',
  styleUrls: ['./kakashi-hatake.component.scss']
})
export class KakashiHatakeComponent implements OnInit {
  character = {
    alphabet: "K",
    name: "KAKASHI HATAKE",
    realName: "",
    association: "NARUTO",
    quote: "I won't allow my comrades to die. I'll protect you with my life. Trust me.",
    description: "Kakashi Hatake earned the moniker of The Copy Ninja by his sheer genius and effective usage of the Sharingan. A master tactician and a highly powerful shinobi, he became Konoha's Sixth Hokage.",
    prev: "jean-grey",
    next: "loki"
  }
  
  constructor(@Inject(DOCUMENT) private document: Document) { 
    const head = this.document.getElementsByTagName("head")[0];
    const style = this.document.createElement("link");
    style.id = "kakashi-hatake",
    style.rel = "stylesheet",
    style.href = "assets/kakashi-hatake.css";
    head.appendChild(style);
  }

  ngOnInit() {
  }

}
