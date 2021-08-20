import { Sessions } from '../mok-lesson';
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
    if (event.target.offsetParent.className == "b-tables__settings b-tables__text") { event.target.offsetParent.children[1].classList.toggle('b-smallMenu_show') }
  }
  deliteRow(e: any) {
    const lessonId = e.target.parentElement.parentElement.parentElement.parentElement.id;
    const lessonIndex = this.sessions.findIndex((el) => { return el.id == lessonId })
    this.sessions.splice(lessonIndex, 1)
  }
}

