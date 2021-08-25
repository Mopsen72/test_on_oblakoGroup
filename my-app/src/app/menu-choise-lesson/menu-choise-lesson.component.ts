import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'menu-choise-lesson',
  templateUrl: './menu-choise-lesson.component.html',
  styleUrls: ['./menu-choise-lesson.component.scss']
})
export class MenuChoiseLessonComponent implements OnInit {
  public selectDate = {
    placeholder: 'Дата',
    placeholderImg: 'assets/img/appIcon/date.svg',
    points: [
      { img: "assets/img/appIcon/dateActive.svg", title: '28 Ноября', id: 'selDatePlan0001', isActive: false },
      { img: "assets/img/appIcon/dateActive.svg", title: '2 Декабря', id: 'selDatePlan0002', isActive: false },
      { img: "assets/img/appIcon/dateActive.svg", title: '5 Декабря', id: 'selDatePlan0003', isActive: false }
    ]
  }
  public selectTime = {
    placeholder: 'Время',
    placeholderImg: 'assets/img/appIcon/time.svg',
    points: [
      { img: "assets/img/appIcon/timeActive.svg", title: '9:00', id: 'selTimePlan0001', isActive: false },
      { img: "assets/img/appIcon/timeActive.svg", title: '12:00', id: 'selTimePlan0002', isActive: false },
      { img: "assets/img/appIcon/timeActive.svg", title: '15:00', id: 'selTimePlan0003', isActive: false }
    ]
  }
  public selectCouch = {
    placeholder: 'Тренер',
    placeholderImg: 'assets/img/appIcon/couch.png',
    points: [
      { img: "assets/img/appIcon/couch.png", title: 'Сергей Ефремов', id: 'selCouchPlan0001', isActive: false },
      { img: "assets/img/appIcon/couch.png", title: 'Иван Иванов', id: 'selCouchPlan0002', isActive: false },
      { img: "assets/img/appIcon/couch.png", title: 'Петр Петров', id: 'selCouchPlan0003', isActive: false }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  upLabel(e: any): void {
    if (e.target.nextSibling.className == "choiseName__label") {
      e.target.nextSibling.classList.add('choiseName__label_active');
    }
  }
  downLabel(e: any): void {
    if (e.target.nextSibling.className == "choiseName__label choiseName__label_active" && e.target.value == '') {
      e.target.nextSibling.classList.remove('choiseName__label_active');
    }
  }
}
