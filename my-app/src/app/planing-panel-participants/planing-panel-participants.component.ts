import { Component, OnInit } from '@angular/core';
import { people, peoples } from '../mok-people';
import { MenuChoiser } from '../menuChoiseItr';

@Component({
  selector: 'planing-panel-participants',
  templateUrl: './planing-panel-participants.component.html',
  styleUrls: ['./planing-panel-participants.component.scss']
})
export class PlaningPanelParticipantsComponent implements OnInit {

  list = [
    { title: 'Поиск', isActive: true, id: "lPlanPar0000", classes: "b-settingMenu__subtitle b-settingMenu__subtitle_active" },
    { title: 'Группа', isActive: true, id: "lPlanPar0001", classes: "b-settingMenu__subtitle b-settingMenu__subtitle_active" },
    { title: 'Должность', isActive: true, id: "lPlanPar0002", classes: "b-settingMenu__subtitle b-settingMenu__subtitle_active" },
    { title: 'Стаж', isActive: true, id: "lPlanPar0003", classes: "b-settingMenu__subtitle b-settingMenu__subtitle_active" },
    { title: 'Подразделение', isActive: false, id: "lPlanPar0004", classes: "b-settingMenu__subtitle" },
    { title: 'Округ', isActive: false, id: "lPlanPar0005", classes: "b-settingMenu__subtitle" },
    { title: 'Город', isActive: false, id: "lPlanPar0006", classes: "b-settingMenu__subtitle" }
  ];

  public selectProgrammPlan: MenuChoiser = { placeholder: "Программа", menuPoint: [{ title: 'Все', isActive: true, id: 'selPrPlan0000' }, { title: 'lorem', isActive: false, id: 'selPrPlan0001' }, { title: 'lorem lorem', isActive: false, id: 'selPrPlan0002' }], classList: 'b-selector b-selector_noShowMobie', classListbody: "b-selector__body b-selector__body_planingPartici" }
  public selectPostPlan: MenuChoiser = { placeholder: "Программа", menuPoint: [{ title: 'Все', isActive: true, id: 'selPrPlan0000' }, { title: 'lorem', isActive: false, id: 'selPrPlan0001' }, { title: 'lorem lorem', isActive: false, id: 'selPrPlan0002' }], classList: 'b-selector b-selector_noShowMobie', classListbody: "b-selector__body b-selector__body_planingPartici" }
  public selectExpPlan: MenuChoiser = { placeholder: "Программа", menuPoint: [{ title: 'Все', isActive: true, id: 'selPrPlan0000' }, { title: 'lorem', isActive: false, id: 'selPrPlan0001' }, { title: 'lorem lorem', isActive: false, id: 'selPrPlan0002' }], classList: 'b-selector b-selector_noShowMobie', classListbody: "b-selector__body b-selector__body_planingPartici" }

  participants = peoples;
  suitableParticipants = peoples;
  checkAllPeople = false;
  eventPeople: people[] = [];
  checkAllPeopleOnEvent = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(e: any): void {
    if (e.target.className == "b-dropdownList__text" || e.target.className == "b-dropdownList__img") {
      const element = e.target.parentElement.children[2];
      element?.classList.toggle('b-settingMenu_show');
    } else if (e.target.className == "b-settings__setFilter b-dropdownList") {
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

  checkAll(): void {
    if (this.checkAllPeopleOnEvent == true) {
      this.checkAllPeopleOnEvent = false
      this.eventPeople.forEach((el) => { el.isActive = false })
    } else {
      this.checkAllPeopleOnEvent = true
      this.eventPeople.forEach((el) => { el.isActive = true })
    }
  }
  checkAllEventPeople(): void {
    if (this.checkAllPeopleOnEvent == true) {
      this.checkAllPeopleOnEvent = false
      this.eventPeople.forEach((el) => { el.isActive = false })
    } else {
      this.checkAllPeopleOnEvent = true
      this.eventPeople.forEach((el) => { el.isActive = true })
    }
  }
  checkPeople(user: people): void {
    const userIndex = this.suitableParticipants.findIndex((el) => { return el.id == user.id });
    if (this.suitableParticipants[userIndex].isActive == true) {
      this.suitableParticipants[userIndex].isActive = false;
    } else if (this.suitableParticipants[userIndex].isActive == false) {
      this.suitableParticipants[userIndex].isActive = true;
    };
    if (this.suitableParticipants.findIndex((el) => { return el.isActive == false }) == -1) {
      this.checkAllPeople = true;
    } else {
      this.checkAllPeople = false;
    }
  }
  checkPeopleEvent(user: people): void {
    const userIndex = this.eventPeople.findIndex((el) => { return el.id == user.id });
    if (this.eventPeople[userIndex].isActive == true) {
      this.eventPeople[userIndex].isActive = false;
    } else if (this.eventPeople[userIndex].isActive == false) {
      this.eventPeople[userIndex].isActive = true;
    };
    if (this.eventPeople.findIndex((el) => { return el.isActive == false }) == -1) {
      this.checkAllPeopleOnEvent = true;
    } else {
      this.checkAllPeopleOnEvent = false;
    }
  }

  allowDrop(e: any): void {
    e.preventDefault()
  }

  dragPeopleAdd(e: any): void {
    e.dataTransfer.setData('id', e.target.id);
  }
  dropPeople(e: any): void {
    const peopleId = e.dataTransfer.getData('id');
    const peopleIndex = this.suitableParticipants.findIndex((el) => { return el.id == peopleId });
    const peopleFind = this.eventPeople.findIndex((el) => { return el.id == this.suitableParticipants[peopleIndex].id });
    if (this.eventPeople.length == 0) {
      this.eventPeople.push(this.suitableParticipants[peopleIndex]);
    } else if (peopleFind == -1) {
      this.eventPeople.push(this.suitableParticipants[peopleIndex]);
    }
  }
  removePeople(user: any): void {
    const peopleIndex = this.suitableParticipants.findIndex((el) => { return el.id == user.id });
    this.eventPeople.splice(peopleIndex, 1);
  }
}
