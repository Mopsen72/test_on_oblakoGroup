import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menu-select-without-pick',
  templateUrl: './menu-select-without-pick.component.html',
  styleUrls: ['./menu-select-without-pick.component.scss']
})
export class MenuSelectWithoutPickComponent implements OnInit {
  @Input() menuSelectable: {
    placeholder: string,
    placeholderImg: string,
    points: {
      img: string,
      title: string,
      id: string,
      isActive: boolean
    }[];
  } = { placeholder: '', placeholderImg: '', points: [{ img: '', title: '', id: '', isActive: false }] }
  checked = { img: '', title: '' }
  constructor() { }

  ngOnInit(): void {
  }

  pick(variant: { img: string, title: string, id: string, isActive: boolean }): void {
    const pickedIndex = this.menuSelectable.points.findIndex((el) => { return el.id == variant.id });
    this.menuSelectable.points.forEach((el) => { el.isActive = false });
    this.menuSelectable.points[pickedIndex].isActive = true;
    this.menuSelectable.points.forEach((el) => {
      if (el.isActive == true) {
        document.getElementById(el.id)?.classList.add('b-selectorWOPrepick__variable_active');
        this.checked = el
      } else if (el.isActive == false) {
        document.getElementById(el.id)?.classList.remove('b-selectorWOPrepick__variable_active');
      }
    })
  }
  clearPick(): void {
    this.menuSelectable.points.forEach((el) => { el.isActive = false });
    this.checked = { img: '', title: '' };
    this.menuSelectable.points.forEach((el) => {
      if (el.isActive == true) {
        document.getElementById(el.id)?.classList.add('b-selectorWOPrepick__variable_active');
        this.checked = el
      } else if (el.isActive == false) {
        document.getElementById(el.id)?.classList.remove('b-selectorWOPrepick__variable_active');
      }
    })
  }
}
