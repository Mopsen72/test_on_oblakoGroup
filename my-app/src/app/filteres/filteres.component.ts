import { Component, OnInit } from '@angular/core';
import { Sessions } from '../mok-lesson';

@Component({
  selector: 'filteres',
  templateUrl: './filteres.component.html',
  styleUrls: ['./filteres.component.scss']
})
export class FilteresComponent implements OnInit {

  sessions = Sessions;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(e: any): void {
    if (e.target.className == "b-dropdownList__text" || e.target.className == "b-dropdownList__img") {
      const element = e.target.parentElement.children[2];
      element?.classList.toggle('b-settingMenu_show');
    }
    if (e.target.className == "b-settings__setFilter b-dropdownList") {
      const element = e.target.children[2];
      element?.classList.toggle('b-settingMenu_show');
    }
  }

  toggleFilterChoice(e: any): void {
    e.target.classList.toggle('b-settingMenu__subtitle_active');
    e.target.children[0].classList.toggle('b-settingMenu__checkbox_active');
  }
}
