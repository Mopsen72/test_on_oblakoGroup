import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuChoiseGroupOnPlaningComponent } from './menu-choise-group-on-planing.component';

describe('MenuChoiseGroupOnPlaningComponent', () => {
  let component: MenuChoiseGroupOnPlaningComponent;
  let fixture: ComponentFixture<MenuChoiseGroupOnPlaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuChoiseGroupOnPlaningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuChoiseGroupOnPlaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
