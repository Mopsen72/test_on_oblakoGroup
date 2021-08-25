import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavPanelComponent } from './nav-panel/nav-panel.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { TabsComponent } from './tabs/tabs.component';
import { FilteresComponent } from './filteres/filteres.component';
import { SessionComponent } from './session/session.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MenuSelectComponent } from './menu-select/menu-select.component';
import { PlaningPanelComponent } from './planing-panel/planing-panel.component';
import { PlaningPanelMainComponent } from './planing-panel-main/planing-panel-main.component';
import { PlaningPanelParticipantsComponent } from './planing-panel-participants/planing-panel-participants.component';
import { MenuChoiseLessonComponent } from './menu-choise-lesson/menu-choise-lesson.component';
import { MenuSelectWithoutPickComponent } from './menu-select-without-pick/menu-select-without-pick.component';



@NgModule({
  declarations: [
    AppComponent,
    NavPanelComponent,
    BreadCrumbsComponent,
    TabsComponent,
    FilteresComponent,
    SessionComponent,
    SearchComponent,
    MenuSelectComponent,
    PlaningPanelComponent,
    PlaningPanelMainComponent,
    PlaningPanelParticipantsComponent,
    MenuChoiseLessonComponent,
    MenuSelectWithoutPickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
