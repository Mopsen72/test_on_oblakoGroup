import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuChoiseStatusComponent } from './menu-choise-status.component';

describe('MenuChoiseStatusComponent', () => {
  let component: MenuChoiseStatusComponent;
  let fixture: ComponentFixture<MenuChoiseStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuChoiseStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuChoiseStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
