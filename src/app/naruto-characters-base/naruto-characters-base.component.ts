import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-naruto-characters-base',
  templateUrl: './naruto-characters-base.component.html',
  styleUrls: ['./naruto-characters-base.component.scss']
})
export class NarutoCharactersBaseComponent implements OnInit {

  @Input()
  character: {};
  constructor() { }

  ngOnInit() {
  }

}
