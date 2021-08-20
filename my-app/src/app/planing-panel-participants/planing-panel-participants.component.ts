import { Component, OnInit } from '@angular/core';
import { people, peoples } from '../mok-people';



@Component({
  selector: 'planing-panel-participants',
  templateUrl: './planing-panel-participants.component.html',
  styleUrls: ['./planing-panel-participants.component.scss']
})
export class PlaningPanelParticipantsComponent implements OnInit {

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

  checkAll(): void {
    if (this.checkAllPeople == true) {
      this.checkAllPeople = false
      this.suitableParticipants.forEach((el) => { el.isActive = false })
    } else {
      this.checkAllPeople = true
      this.suitableParticipants.forEach((el) => { el.isActive = true })
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
  checkPeople(e: any): void {
    const peopleId = e.target.parentElement.id;
    const peopleIndex = this.suitableParticipants.findIndex((el) => { return el.id == peopleId });
    if (this.suitableParticipants[peopleIndex].isActive) {
      this.suitableParticipants[peopleIndex].isActive = false;
    } else {
      this.suitableParticipants[peopleIndex].isActive = true;
    }
    const peopleOff = this.suitableParticipants.findIndex((el) => { return el.isActive == false });
    const peopleOn = this.suitableParticipants.findIndex((el) => { return el.isActive == true });
    if (peopleOn !== -1 && peopleOff !== -1) {
      this.checkAllPeople = false;
    } else if (peopleOn !== -1 && peopleOff == -1) {
      this.checkAllPeople = true;
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
  removePeople(e: any): void {
    const peopleId = e.target.id;
    const peopleIndex = this.suitableParticipants.findIndex((el) => { return el.id == peopleId });
    this.eventPeople.splice(peopleIndex, 1);
  }
}
