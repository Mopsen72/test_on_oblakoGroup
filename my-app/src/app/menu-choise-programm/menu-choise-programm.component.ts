import { Component, OnInit } from '@angular/core';
import { MenuChoiser } from '../menuChoiseItr';

@Component({
  selector: 'menu-choise-programm',
  templateUrl: './menu-choise-programm.component.html',
  styleUrls: ['./menu-choise-programm.component.scss']
})
export class MenuChoiseProgrammComponent implements OnInit {

  menuPoint = [{ title: 'Все', isActive: true, id: 0 }, { title: 'lorem', isActive: false, id: 1 }, { title: 'lorem lorem', isActive: false, id: 2 }];
  selectedPoint = this.menuPoint[0]


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(variable: MenuChoiser): void {
    this.menuPoint.forEach((el) => { el.isActive = false });
    let point: number = this.menuPoint.findIndex((el) => { return variable.id == el.id });
    this.menuPoint[point].isActive = true;
    this.selectedPoint = this.menuPoint[point];
    let variantPoint = document.querySelectorAll('.b-selector__variable_programm')
    this.menuPoint.forEach((el, i) => {
      if (el.isActive == true) {
        variantPoint[i].classList.add('b-selector__variable_active')
      } else { variantPoint[i].classList.remove('b-selector__variable_active') }
    })
  }
}
