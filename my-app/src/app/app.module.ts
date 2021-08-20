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
import { MenuChoiseProgrammComponent } from './menu-choise-programm/menu-choise-programm.component';
import { MatSelectModule } from '@angular/material/select';
import { MenuChoisePeriodComponent } from './menu-choise-period/menu-choise-period.component';
import { MenuChoiseStatusComponent } from './menu-choise-status/menu-choise-status.component';
import { MenuChoiseSortComponent } from './menu-choise-sort/menu-choise-sort.component';
import { PlaningPanelComponent } from './planing-panel/planing-panel.component';
import { PlaningPanelMainComponent } from './planing-panel-main/planing-panel-main.component';
import { PlaningPanelParticipantsComponent } from './planing-panel-participants/planing-panel-participants.component';
import { MenuChoiseProgrammOnPlaningComponent } from './menu-choise-programm-on-planing/menu-choise-programm-on-planing.component';
import { MenuChoiseLessonComponent } from './menu-choise-lesson/menu-choise-lesson.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DataPickerComponent } from './data-picker/data-picker.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { CouchPickerComponent } from './couch-picker/couch-picker.component';
import { SearchOnPlaningComponent } from './search-on-planing/search-on-planing.component';
import { MenuChoiseGroupOnPlaningComponent } from './menu-choise-group-on-planing/menu-choise-group-on-planing.component';
import { MenuChoisePostOnPlaningComponent } from './menu-choise-post-on-planing/menu-choise-post-on-planing.component';
import { MenuChoiseExpOnPlaningComponent } from './menu-choise-exp-on-planing/menu-choise-exp-on-planing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavPanelComponent,
    BreadCrumbsComponent,
    TabsComponent,
    FilteresComponent,
    SessionComponent,
    SearchComponent,
    MenuChoiseProgrammComponent,
    MenuChoisePeriodComponent,
    MenuChoiseStatusComponent,
    MenuChoiseSortComponent,
    PlaningPanelComponent,
    PlaningPanelMainComponent,
    PlaningPanelParticipantsComponent,
    MenuChoiseProgrammOnPlaningComponent,
    MenuChoiseLessonComponent,
    DataPickerComponent,
    TimePickerComponent,
    CouchPickerComponent,
    SearchOnPlaningComponent,
    MenuChoiseGroupOnPlaningComponent,
    MenuChoisePostOnPlaningComponent,
    MenuChoiseExpOnPlaningComponent
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
