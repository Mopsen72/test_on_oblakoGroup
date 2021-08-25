import { Component, OnInit } from '@angular/core';
import { MenuChoiser } from '../menuChoiseItr';

@Component({
  selector: 'planing-panel-main',
  templateUrl: './planing-panel-main.component.html',
  styleUrls: ['./planing-panel-main.component.scss']
})
export class PlaningPanelMainComponent implements OnInit {

  conditions = [
    { title: 'Не использовать код доступа', isActive: true, id: 'radPlan0000' },
    { title: 'Требовать регистрацию', isActive: false, id: 'radPlan0001' },
    { title: 'Запросить только имя и фамилию', isActive: false, id: 'radPlan0002' },
    { title: 'Не требовать регистрацию, имя и фамилию', isActive: false, id: 'radPlan0003' }
  ]
  public selectProgrammInPlaning: MenuChoiser = {
    placeholder: "Программа",
    menuPoint: [
      { title: 'Страхование с заботой о клиенте', isActive: true, id: 'selPlanPr0000' },
      { title: 'lorem lorem lorem lorem lorem', isActive: false, id: 'selPlanPr0001' },
      { title: 'lorem lorem lorem lorem lorem lorem lorem', isActive: false, id: 'selPlanPr0002' }
    ],
    classList: 'b-selector b-selector_margin',
    classListbody: 'b-selector__body b-selector__body_planingProgramm'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
