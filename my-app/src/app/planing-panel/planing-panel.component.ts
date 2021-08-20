import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'planing-panel',
  templateUrl: './planing-panel.component.html',
  styleUrls: ['./planing-panel.component.scss']
})
export class PlaningPanelComponent implements OnInit {

  opened = [
    { isOpen: true, title: 'Основное' },
    { isOpen: false, title: 'Участники' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  closePlaningPanel(e: any): void {
    if (e.target.className == "b-planingPanel__controlImg b-planingPanel__controlImg_smallMargR") { document.querySelector('.b-link__cover')?.classList.remove('b-link__cover_show') };
  }

  togglePoint(e: any): void {
    if (e.target.className == "b-tabs__point b-tabs__point_planingPanel b-tabs__point_active" || e.target.className == "b-tabs__point b-tabs__point_planingPanel") {
      const openedVariat = document.querySelectorAll('.b-tabs__point_planingPanel');
      this.opened.forEach((el) => {
        if (e.target.innerText == el.title) {
          el.isOpen = true;
        } else {
          el.isOpen = false
        }
      });
      for (let i = 0; i < this.opened.length; i++) {
        if (this.opened[i].isOpen == true) {
          openedVariat[i].classList.add('b-tabs__point_active');
        } else {
          openedVariat[i].classList.remove('b-tabs__point_active');
        }
      }

    }
  }
}
