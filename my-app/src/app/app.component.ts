import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Планирование';
  mainPageTabs = [{ title: 'Групповое', isActive: true, className: "b-tabs__point b-tabs__point_active" }, { title: 'Индивидуальное', isActive: false, className: "b-tabs__point" }]
}
