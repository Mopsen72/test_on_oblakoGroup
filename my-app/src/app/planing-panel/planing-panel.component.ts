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
  planginPanelTabs = [{ title: 'Основное', isActive: true, className: "b-tabs__point b-tabs__point_active" }, { title: 'Участники', isActive: false, className: "b-tabs__point" }]

  constructor() { }

  ngOnInit(): void {
  }

  closePlaningPanel(e: any): void {
    if (e.target.className == "b-planingPanel__controlImg b-planingPanel__controlImg_smallMargR") { document.querySelector('.b-link__cover')?.classList.remove('b-link__cover_show') };
  }

}
