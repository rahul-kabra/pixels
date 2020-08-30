import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dc-characters-base',
  templateUrl: './dc-characters-base.component.html',
  styleUrls: ['./dc-characters-base.component.scss'],
})
export class DcCharactersBaseComponent implements OnInit {
  @Input()
  character = {
    alphabet: '',
    name: '',
    realName: '',
    association: '',
    quote: '',
    description: '',
    prev: '',
    next: '',
  };
  constructor() {}

  ngOnInit() {}
}