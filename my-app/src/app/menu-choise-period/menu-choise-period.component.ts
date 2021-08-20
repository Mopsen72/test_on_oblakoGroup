import { Component, OnInit } from '@angular/core';
import { MenuChoiser } from '../menuChoiseItr';

@Component({
  selector: 'menu-choise-period',
  templateUrl: './menu-choise-period.component.html',
  styleUrls: ['./menu-choise-period.component.scss']
})
export class MenuChoisePeriodComponent implements OnInit {

  menuPoint = [{ title: 'Июнь 2019', isActive: true, id: 0 }, { title: 'lorem', isActive: false, id: 1 }, { title: 'lorem lorem', isActive: false, id: 2 }];
  selectedPoint = this.menuPoint[0]

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(variable: MenuChoiser): void {
    this.menuPoint.forEach((el) => { el.isActive = false });
    let point: number = this.menuPoint.findIndex((el) => { return variable.id == el.id });
    this.menuPoint[point].isActive = true;
    this.selectedPoint = this.menuPoint[point];
    let variantPoint = document.querySelectorAll('.b-selector__variable_period')
    this.menuPoint.forEach((el, i) => {
      if (el.isActive == true) {
        variantPoint[i].classList.add('b-selector__variable_active')
      } else { variantPoint[i].classList.remove('b-selector__variable_active') }
    })
  }
}
