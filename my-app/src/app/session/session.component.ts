import { Lesson, Sessions } from '../mok-lesson';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  sessions = Sessions

  constructor() { }

  ngOnInit(): void {
  }

  smallMenuToggle(event: any) {
    if (event.target.className == "b-tables__settings b-tables__text") { event.target.children[1].classList.toggle('b-smallMenu_show') }
  }
  deliteRow(e: any) {
    const lessonId = e.target.parentElement.parentElement.parentElement.parentElement.id;
    const lessonIndex = this.sessions.findIndex((el) => { return el.id == lessonId })
    this.sessions.splice(lessonIndex, 1)
  }
  smallMenuToggleOnPhone(e: any, lesson: Lesson) {
    if (window.innerWidth < 667) {
      if (e.target.id == lesson.id) {
        e.target.children[5].children[1].classList.toggle('b-smallMenu_show');
      } else if (e.target.nodeName == "P") {
        e.target.parentElement.children[5].children[1].classList.toggle('b-smallMenu_show');
      }
    }
  }
}

