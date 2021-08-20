import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuChoiseExpOnPlaningComponent } from './menu-choise-exp-on-planing.component';

describe('MenuChoiseExpOnPlaningComponent', () => {
  let component: MenuChoiseExpOnPlaningComponent;
  let fixture: ComponentFixture<MenuChoiseExpOnPlaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuChoiseExpOnPlaningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuChoiseExpOnPlaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
