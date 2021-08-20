import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuChoisePostOnPlaningComponent } from './menu-choise-post-on-planing.component';

describe('MenuChoisePostOnPlaningComponent', () => {
  let component: MenuChoisePostOnPlaningComponent;
  let fixture: ComponentFixture<MenuChoisePostOnPlaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuChoisePostOnPlaningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuChoisePostOnPlaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
