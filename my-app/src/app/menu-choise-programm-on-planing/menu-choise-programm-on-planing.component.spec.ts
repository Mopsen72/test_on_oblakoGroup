import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuChoiseProgrammOnPlaningComponent } from './menu-choise-programm-on-planing.component';

describe('MenuChoiseProgrammOnPlaningComponent', () => {
  let component: MenuChoiseProgrammOnPlaningComponent;
  let fixture: ComponentFixture<MenuChoiseProgrammOnPlaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuChoiseProgrammOnPlaningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuChoiseProgrammOnPlaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
