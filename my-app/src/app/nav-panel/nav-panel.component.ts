import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.scss']
})
export class NavPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openPlaningPanel(e: any): void {
    if (e.path[0].className == "b-link__text" || e.path[0].className == "b-link__simbol b-link__simbol_marginRight") { document.querySelector('.b-link__cover')?.classList.add('b-link__cover_show') };
  }
}
