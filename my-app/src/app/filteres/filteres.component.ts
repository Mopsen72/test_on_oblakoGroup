import { Component, OnInit } from '@angular/core';
import { Sessions } from '../mok-lesson';
import { MenuChoiser } from '../menuChoiseItr';

@Component({
  selector: 'filteres',
  templateUrl: './filteres.component.html',
  styleUrls: ['./filteres.component.scss']
})
export class FilteresComponent implements OnInit {

  sessions = Sessions;
  list = [
    { title: 'Поиск', isActive: true, id: "l0000", classes: "b-settingMenu__subtitle b-settingMenu__subtitle_active" },
    { title: 'Программа', isActive: true, id: "l0001", classes: "b-settingMenu__subtitle b-settingMenu__subtitle_active" },
    { title: 'Период', isActive: true, id: "l0002", classes: "b-settingMenu__subtitle b-settingMenu__subtitle_active" },
    { title: 'Статус', isActive: true, id: "l0003", classes: "b-settingMenu__subtitle b-settingMenu__subtitle_active" },
    { title: 'Тренер', isActive: false, id: "l0004", classes: "b-settingMenu__subtitle" },
    { title: 'Прогресс', isActive: false, id: "l0005", classes: "b-settingMenu__subtitle" }
  ];
  public selectProgramm: MenuChoiser = { placeholder: "Программа", menuPoint: [{ title: 'Все', isActive: true, id: 'selpr0000' }, { title: 'lorem', isActive: false, id: 'selpr0001' }, { title: 'lorem lorem', isActive: false, id: 'selpr0002' }], classList: 'b-selector b-selector_margin b-selector_noShowMobie', classListbody: "b-selector__body" }
  public selectPeroid: MenuChoiser = { placeholder: "Период", menuPoint: [{ title: 'Июнь 2019', isActive: true, id: 'selpe0000' }, { title: 'lorem', isActive: false, id: 'selpe0001' }, { title: 'lorem lorem', isActive: false, id: 'selpe0002' }], classList: 'b-selector b-selector_margin b-selector_noShowMobie', classListbody: "b-selector__body" }
  public selectStatus: MenuChoiser = { placeholder: "Статус", menuPoint: [{ title: 'Все', isActive: true, id: 'selstat0000' }, { title: 'lorem', isActive: false, id: 'selstat0001' }, { title: 'lorem lorem', isActive: false, id: 'selstat0002' }], classList: 'b-selector b-selector_margin b-selector_noShowMobie', classListbody: "b-selector__body" }
  public selectSort: MenuChoiser = { placeholder: "Сортировка", menuPoint: [{ title: 'По прогрессу обучения', isActive: true, id: 'selstat0000' }, { title: 'lorem', isActive: false, id: 'selstat0001' }, { title: 'lorem lorem', isActive: false, id: 'selstat0002' }], classList: 'b-selector b-selector_margin b-selector_noShowDesk', classListbody: "b-selector__body" }


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
    if (e.target.id !== '') {
      const point = this.list.findIndex((el) => { return el.id === e.target.id });
      if (this.list[point].classes == "b-settingMenu__subtitle b-settingMenu__subtitle_active") {
        this.list[point].classes = "b-settingMenu__subtitle";
        this.list[point].isActive = false;
      } else if (this.list[point].classes == "b-settingMenu__subtitle") {
        this.list[point].classes = "b-settingMenu__subtitle b-settingMenu__subtitle_active"
        this.list[point].isActive = true;
      }
    }
  }
}
