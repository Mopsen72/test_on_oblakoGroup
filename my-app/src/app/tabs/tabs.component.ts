import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() points: { title: string, isActive: boolean, className: string }[] = [{ title: '', isActive: false, className: '' }]
  constructor() { }

  ngOnInit(): void {
  }

  changePoint(point: { title: string, isActive: boolean, className: string }): void {
    const pointIndex = this.points.findIndex((el) => { return el.title == point.title })
    this.points.forEach((el) => {
      el.isActive = false;
      el.className = "b-tabs__point"
    });
    this.points[pointIndex].isActive = true;
    this.points[pointIndex].className = "b-tabs__point b-tabs__point_active";
  }
}
