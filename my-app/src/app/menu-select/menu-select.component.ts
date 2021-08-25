import { Component, Input, OnInit } from '@angular/core';
import { MenuChoiser } from '../menuChoiseItr';


@Component({
  selector: 'menu-select',
  templateUrl: './menu-select.component.html',
  styleUrls: ['./menu-select.component.scss']
})
export class MenuSelectComponent implements OnInit {
  @Input() selector: MenuChoiser = { placeholder: '', menuPoint: [{ title: '', isActive: true, id: '' }], classList: '', classListbody: '' };
  selected = this.selector.menuPoint[0].title;

  constructor() { }

  ngOnInit(): void {
    this.selector.menuPoint.forEach((el) => {
      if (el.isActive == true) {
        document.getElementById(el.id)?.classList.add('b-selector__variable_active');
        this.selected = el.title
      } else if (el.isActive == false) {
        document.getElementById(el.id)?.classList.remove('b-selector__variable_active');
      }
    })
  }

  onSelect(variant: { title: string, isActive: boolean, id: string }): void {
    const pointIndex = this.selector.menuPoint.findIndex((el) => { return el.id == variant.id });
    this.selector.menuPoint.forEach((el) => { el.isActive = false });
    this.selector.menuPoint[pointIndex].isActive = true
    this.selector.menuPoint.forEach((el) => {
      if (el.isActive == true) {
        document.getElementById(el.id)?.classList.add('b-selector__variable_active');
        this.selected = el.title
      } else if (el.isActive == false) {
        document.getElementById(el.id)?.classList.remove('b-selector__variable_active');
      }
    })
  }
}
