import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'menu-choise-lesson',
  templateUrl: './menu-choise-lesson.component.html',
  styleUrls: ['./menu-choise-lesson.component.scss']
})
export class MenuChoiseLessonComponent implements OnInit {

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
