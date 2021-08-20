import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'planing-panel-main',
  templateUrl: './planing-panel-main.component.html',
  styleUrls: ['./planing-panel-main.component.scss']
})
export class PlaningPanelMainComponent implements OnInit {

  conditions = [
    { title: 'Не использовать код доступа', active: true, id: 0 },
    { title: 'Требовать регистрацию', active: false, id: 1 },
    { title: 'Запросить только имя и фамилию', active: false, id: 2 },
    { title: 'Не требовать регистрацию, имя и фамилию', active: false, id: 3 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  changeRadio(e: any): void {
    if (e.target.className == "conditions__radio") {
      const point = this.conditions.findIndex((el) => { return el.title == e.target.innerText });
      this.conditions.forEach((el) => { el.active = false });
      this.conditions[point].active = true;
    };
    if (e.target.className == "conditions__radioImg") {
      const point = this.conditions.findIndex((el) => { return el.title == e.target.parentElement.innerText });
      this.conditions.forEach((el) => { el.active = false });
      this.conditions[point].active = true;
    }
    const arr = document.querySelectorAll('.conditions__radio')
    arr.forEach((el) => {
      el.classList.remove('conditions__radio_active');
      el.children[0].attributes[1].nodeValue = "assets/img/appIcon/radioButton.svg"
    });
    this.conditions.forEach((el, i) => {
      if (el.active) {
        arr[i].classList.add('conditions__radio_active');
        arr[i].children[0].attributes[1].nodeValue = "assets/img/appIcon/radioButtonActive.svg"
      }
    })

  }
}
