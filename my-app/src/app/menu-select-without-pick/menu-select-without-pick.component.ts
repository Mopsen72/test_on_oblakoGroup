import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-select-without-pick',
  templateUrl: './menu-select-without-pick.component.html',
  styleUrls: ['./menu-select-without-pick.component.scss']
})
export class MenuSelectWithoutPickComponent implements OnInit {

  checked = { title: '' }
  constructor() { }

  ngOnInit(): void {
  }

}
