import { Component, OnInit } from '@angular/core';
import { MenuChoiser } from '../menuChoiseItr';

@Component({
  selector: 'time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit {

  menuPoint = [{ title: '8:30', isActive: false, id: 0 }, { title: '10:00', isActive: false, id: 1 }, { title: '12:00', isActive: false, id: 2 }];
  selectedPoint = { title: '' }

  constructor() { }

  ngOnInit(): void {
  }

  openChoiseBox(e: any): void {
    if (e.target.className == "b-selector__body") {
      e.target.parentElement.parentElement.children[1].classList.add('b-selector__choiseBox_active')
    } else if (e.target.className == "b-selector__choise") {
      e.target.parentElement.parentElement.parentElement.parentElement.children[1].classList.add('b-selector__choiseBox_active');
    }
  }
  choise(e: any, variable: MenuChoiser): void {
    this.menuPoint.forEach((el) => { el.isActive = false });
    let point: number = this.menuPoint.findIndex((el) => { return variable.id == el.id });
    this.menuPoint[point].isActive = true;
    this.selectedPoint = this.menuPoint[point];
    e.target.parentElement.classList.remove('b-selector__choiseBox_active');
    e.target.parentElement.parentElement.children[0].children[0].children[0].children[1].classList.remove('b-selector__label_empty');
    if (e.target.parentElement.parentElement.children[0].children[0].children[1].className == "b-selector__shape") {
      e.target.parentElement.parentElement.children[0].children[0].children[1].classList.add('b-selector__shape_show')
    }
    if (e.target.parentElement.parentElement.children[0].children[0].children[2].className == "b-selector__angle b-selector__angle_empty") {
      e.target.parentElement.parentElement.children[0].children[0].children[2].classList.remove('b-selector__angle_empty')
    }
  }
  clearChoise(e: any): void {
    this.menuPoint.forEach((el) => { el.isActive = false });
    this.selectedPoint = { title: '' };
    e.target.parentElement.children[0].children[1].classList.add('b-selector__label_empty');
    e.target.parentElement.children[2].classList.add('b-selector__angle_empty');
    e.target.parentElement.children[1].classList.remove('b-selector__shape_show')
  }
}
