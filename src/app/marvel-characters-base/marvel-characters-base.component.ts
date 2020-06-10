import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-marvel-characters-base',
  templateUrl: './marvel-characters-base.component.html',
  styleUrls: ['./marvel-characters-base.component.scss']
})
export class MarvelCharactersBaseComponent implements OnInit {

  @Input()
  character: {};
  constructor() { }

  ngOnInit() {
  }

}
